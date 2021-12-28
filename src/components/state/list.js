import { assign } from "xstate";

const storyIdsUrl = "https://hacker-news.firebaseio.com/v0/topstories.json"
const storiesUrl = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`

const fetchStories = async () => {
    const storyIds = await fetch(storyIdsUrl).then(data => data.json());
    const stories = await Promise.all(storyIds.slice(0, 10)
                    .map(id => storiesUrl(id))
                    .map(url => fetch(url).then(data => data.json())));
    return stories;
}

export const list =  {
                    states: {
                        loading: {
                            invoke: {
                                id: 'fetchStories',
                                src: fetchStories,
                                onDone: {
                                target: 'success',
                                actions: assign({ stories: (context, event) => event.data })
                                },
                                onError: {
                                target: 'fail',
                                actions: assign({ error: (context, event) => event.data })
                                }
                            }
                        },
                        success: {},
                        fail: {},
                        selected: {}
                    }
                }