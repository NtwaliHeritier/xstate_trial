import { createMachine } from "xstate";

export const createStoryMachine = story => createMachine({
    id: "storyMachine",
    initial: "init",
    context: {
        story,
        error: undefined
    },
    states: {
        init: {}
    },
    on: {}  
})