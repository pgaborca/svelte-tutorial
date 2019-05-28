<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      decription:
        "In this meetup, we will have some experts that teach you how to code",
      imageUrl:
        "https://s3.amazonaws.com/mentoring.redesign/s3fs-public/Meetup%20Small.png",
      address: "27 Nerd Road, 10000 New York",
      contactEmail: "code@test.com",
      isFavorite: false
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go swimming",
      decription: "Swim swim swim",
      imageUrl:
        "https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/2019-1/baby_swimming-1200x628-header.jpg?w=1155",
      address: "27 Nerd Road, 10000 New York",
      contactEmail: "swim@test.com",
      isFavorite: false
    }
  ];

  let editMode = null;

  function addMeetup(event) {
    const newMeetup = {
      id: Math.random().toString,
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      address: event.detail.address,
      imageUrl: event.detail.imageUrl,
      contactEmail: event.detail.email,
      description: event.detail.description
    };

    meetups = [newMeetup, ...meetups];
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetup = { ...meetups.find(m => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex(m => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  }
  function cancelEdit() {
    editMode = null;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = 'add')}>New Meetup</Button>
  </div>
  {#if editMode === 'add'}
    <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
  {/if}
  <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>
