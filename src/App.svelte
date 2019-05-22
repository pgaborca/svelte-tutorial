<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageUrl = "";

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
      contactEmail: "code@test.com"
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go swimming",
      decription: "Swim swim swim",
      imageUrl:
        "https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/2019-1/baby_swimming-1200x628-header.jpg?w=1155",
      address: "27 Nerd Road, 10000 New York",
      contactEmail: "swim@test.com"
    }
  ];

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString,
      title: title,
      subtitle: subtitle,
      address: address,
      imageUrl: imageUrl,
      contactEmail: email,
      description: description
    };

    meetups = [newMeetup, ...meetups];
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" bind:value={title} />
    </div>
    <div class="form-control">
      <label for="subtitle">Subtitle</label>
      <input type="text" id="subtitle" bind:value={subtitle} />
    </div>
    <div class="form-control">
      <label for="address">Address</label>
      <input type="text" id="address" bind:value={address} />
    </div>
    <div class="form-control">
      <label for="imageUrl">Image URL</label>
      <input type="text" id="imageUrl" bind:value={imageUrl} />
    </div>
    <div class="form-control">
      <label for="email">Email Address</label>
      <input type="email" id="email" bind:value={email} />
    </div>
    <div class="form-control">
      <label for="Description">Description</label>
      <textarea rows="3" id="description" bind:value={description} />
    </div>
    <button type="submit">Save</button>
  </form>
  <MeetupGrid {meetups} />
</main>
