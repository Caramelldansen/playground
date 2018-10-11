<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      floating
      app
    >
      <v-list>
        <v-list-tile @click="doNothingForNow">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          prepend-icon="account_circle"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>

          <v-list-group
            no-action
            sub-group
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
              v-for="(admin, i) in admins"
              :key="i"
              @click="doNothingForNow"
            >
              <v-list-tile-title v-text="admin[0]"/>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"/>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group
            sub-group
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
              v-for="(crud, i) in cruds"
              :key="i"
              @click="doNothingForNow"
            >
              <v-list-tile-title v-text="crud[0]"/>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"/>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>

        <v-list-tile @click="doNothingForNow">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <v-btn
                slot="activator"
                :href="source"
                icon
                large
                target="_blank"
              >
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    drawer: true,
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings']
    ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete']
    ]
  }),
  methods: {
    doNothingForNow: () => {}
  }
}
</script>

<style scoped>
#oat .v-list__group__header__prepend-icon .v-icon {
    color: red
}
</style>
