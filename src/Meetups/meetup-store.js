import {
    writable
} from "svelte/store"

const meetups = writable([{
        id: "m1",
        title: "Coding Bootcamp",
        subtitle: "Learn to code in 2 hours",
        decription: "In this meetup, we will have some experts that teach you how to code",
        imageUrl: "https://s3.amazonaws.com/mentoring.redesign/s3fs-public/Meetup%20Small.png",
        address: "27 Nerd Road, 10000 New York",
        contactEmail: "code@test.com",
        isFavorite: false
    },
    {
        id: "m2",
        title: "Swim Together",
        subtitle: "Let's go swimming",
        decription: "Swim swim swim",
        imageUrl: "https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/2019-1/baby_swimming-1200x628-header.jpg?w=1155",
        address: "27 Nerd Road, 10000 New York",
        contactEmail: "swim@test.com",
        isFavorite: false
    }
]);


const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
            id: Math.random().toString(),
            isFavorite: false
        };
        meetups.update(items => {
            return [newMeetup, ...items];
        });
    },
    toggleFavorite: (id) => {
        meetups.update(items => {
            const updatedMeetup = {
                ...items.find(m => m.id === id)
            };
            updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
            const meetupIndex = items.findIndex(m => m.id === id);
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;
        })
    }
}

export default customMeetupsStore;