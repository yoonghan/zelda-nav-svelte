<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0-beta.14/bare.min.css"
/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Material+Icons&Roboto+Mono:ital@0;1&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
  rel="stylesheet"
/>
<script lang="ts">
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Menu from '@smui/menu';
  import Button from '@smui/button';
  import List, { Item, Separator, Text } from '@smui/list';
  import { Anchor } from '@smui/menu-surface';
  import { auth$ } from "@walcron/zelda-shared-context";

  let mainMenu:Menu, profileMenu:Menu;
  let loggedIn = false;
  let menuAnchor: HTMLDivElement, profileAnchor: HTMLDivElement;
  let menuAnchorClasses: { [k: string]: boolean } = {}, profileAnchorClasses: { [k: string]: boolean } = {};

  auth$.subscribe(({ sessionToken }) => {
    loggedIn = sessionToken !== null
  });

  const onClick = (location: string) => () => {
    window.location.href = `/${location}`
  }
</script>
  <TopAppBar
    variant="static"
  >
    <Row>
      <Section>
        <div 
        class={Object.keys(menuAnchorClasses).join(' ')}
        use:Anchor={{
          addClass: (className) => {
            if (!menuAnchorClasses[className]) {
              menuAnchorClasses[className] = true;
            }
          },
          removeClass: (className) => {
            if (menuAnchorClasses[className]) {
              delete menuAnchorClasses[className];
              menuAnchorClasses = menuAnchorClasses;
            }
          },
        }}
        bind:this={menuAnchor}>
        <IconButton class="material-icons" on:click={() => mainMenu.setOpen(true)}>
          menu
        </IconButton>
        <Title>Walcron Dashboard</Title>
        <Menu 
        bind:this={mainMenu} 
        anchor={false}
        bind:anchorElement={menuAnchor}>
          <List>
            <Item on:SMUI:action={onClick('about')}>
              <Text>About</Text>
            </Item>
            {#if loggedIn}
            <Item on:SMUI:action={onClick('chart')}>
              <Text>Chart</Text>
            </Item>
            {/if}
          </List>
        </Menu>
      </Section>
      <Section align="end" toolbar>
        {#if !loggedIn}
          <Button on:click={onClick('auth/login')}>Login</Button>
        {:else}
          <div 
          class={Object.keys(profileAnchorClasses).join(' ')}
          use:Anchor={{
            addClass: (className) => {
              if (!profileAnchorClasses[className]) {
                profileAnchorClasses[className] = true;
              }
            },
            removeClass: (className) => {
              if (profileAnchorClasses[className]) {
                delete profileAnchorClasses[className];
                profileAnchorClasses = profileAnchorClasses;
              }
            },
          }}
          bind:this={profileAnchor}>
            <IconButton class="material-icons" on:click={() => profileMenu.setOpen(true)}>
              account_box
            </IconButton>
            <Menu 
            bind:this={profileMenu}
            anchor={false}
            bind:anchorElement={profileAnchor}>
              <List>
                <Item on:SMUI:action={onClick('auth/profile')}>
                  <Text>Profile</Text>
                </Item>
                <Separator/>
                <Item on:SMUI:action={onClick('auth/logout')}>
                  <Text>Logout</Text>
                </Item>
              </List>
            </Menu>
          </div>
        {/if}
      </Section>
    </Row>
  </TopAppBar>
