<template>
  <v-container>
    <v-theme-provider root :dark="isDark">
        <v-container>
          <v-row justify="center" class="ma-5">
            <v-col xs="12" sm="8">
              <v-card>
                <v-toolbar color="blue darken-4" dark>
                  <v-toolbar-side-icon></v-toolbar-side-icon>
                  <v-toolbar-title class="headline">Todo App</v-toolbar-title>

                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn icon @click="isDark = !isDark" v-on="on">
                        <v-icon v-model="isDark">{{
                          !isDark ? 'mdi-weather-night' : 'mdi-weather-cloudy'
                        }}</v-icon>
                      </v-btn>
                    </template>
                    <span>
                      {{ isDark ? 'light mode' : 'dark mode' }}
                    </span>
                  </v-tooltip>
                </v-toolbar>

                <v-list two-line subheader>
                  <p class="mx-12 text-right">
                    <b>{{ todos.length }}</b> Tasks
                  </p>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-text-field
                          v-model="newTodo"
                          id="newTodo"
                          name="newTodo"
                          label="Type your task"
                          @keyup.enter="addTodo()"
                        />
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <v-list subheader two-line flat>
                  <v-subheader class="subheading" v-if="todos.length == 0"
                    >You have 0 Tasks, add some</v-subheader
                  >
                  <v-subheader class="subheading" v-else>Your Tasks</v-subheader>

                  <v-list-item-group>
                    <v-list-item v-for="(todo, i) in todos" :key="i">
                      <template>
                        <v-list-item-action>
                          <v-checkbox v-model="todo.done" data-cy="checkTodo"></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title
                            data-cy="todoText"
                            :class="{
                              done: todo.done,
                            }"
                            >{{ todo.title | capitalize }}</v-list-item-title
                          >
                        </v-list-item-content>
                        <v-btn fab ripple small color="red" v-if="todo.done" @click="removeTodo(i)">
                          <v-icon data-cy="deleteTodoButton" class="white--text">mdi-close</v-icon>
                        </v-btn>
                      </template>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
  </v-container>
</template>

<script lang="ts">
 import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  components: {},
  setup() {
    /*
 _
|_)  _   _.  _ _|_ o     _    \  / _. ._ _
| \ (/_ (_| (_  |_ | \/ (/_    \/ (_| | _>
*/
    const isDark = ref(false);
    const newTodo = ref('');
    const todos: any = ref([]);
    /*
 |\/|  _ _|_ |_   _   _|  _
 |  | (/_ |_ | | (_) (_| _>
*/

    const addTodo = () => {
      if (newTodo.value && newTodo.value.trim()) {
        todos.value.push({
          title: newTodo.value,
          done: false,
        });
        newTodo.value = '';
      }
    };
    const removeTodo = (index: number) => {
      todos.value.splice(index, 1);
    };
    return {
      isDark,
      newTodo,
      todos,
      addTodo,
      removeTodo,
    };
  },
});
</script>
<style lang="scss">
.done {
  text-decoration: line-through;
}
</style>

