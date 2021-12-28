import { createContext } from "react";
import { createMachine, spawn, assign } from "xstate";
import {auth} from './auth';
import {list} from './list';
import { createStoryMachine } from "./story";

export const MachineContext = createContext();

export const appMachine = createMachine({
            id: "app",
            initial: "init",
            context: {
                user: undefined,
                error: undefined,
                stories: [],
                selectedStory: undefined
            },
            states: {
                init: {},
                auth,
                list,
                stories: {
                    states: {
                        selected: {}
                    }
                }
            },
            on: {
                LOGIN: {
                    target: 'auth.started'
                },
                LOAD_STORIES: {
                    target: 'list.loading'
                },
                SELECT_STORY: {
                    target: 'stories.selected',
                    actions: assign((context, event) => {
                        const newStoryMachine = spawn(createStoryMachine(event.story));
                        return {selectedStory: newStoryMachine}
                    })
                }
            }
        })