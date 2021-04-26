<template>
    <div>
        <h1>Event #{{event.title}}</h1>
    </div>
</template> 
<script>
import EventService from '@/services/EventService.js'
export default {
   head() { // <-- property used by vue-meta to add header tags
    return {
      title: 'Event #' + this.event.title, // <-- For our title tag
      meta: [
        {
          hid: 'description',  
          name: 'description', // <-- for our meta description tag
          content:
            `abracadabra ${this.event.title} `
        }
      ]
    }
  },
  async asyncData({ error, params }) {
    try {
        const { data } = await EventService.getEvent(params.id)
        return {
          event: data
        }
    } catch(e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events event #' + params.id
      })
    }
  }
}
</script>