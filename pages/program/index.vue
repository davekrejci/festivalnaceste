<template>
  <div class="p-2 lg:p-4">
    <h1 class="text-2xl text-center font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight my-4">Program</h1>
    <div class="px-3 py-3 mx-auto rounded-lg">
    <TabGroup>
      <TabList class="flex justify-center space-x-1 rounded-xl bg-base-100 p-1 max-w-4xl mx-auto">
        <Tab v-for="(day, index) in days" as="template" :key="index" v-slot="{ selected }">
          <button :class="[
            'w-36 py-2.5 text-sm font-bold leading-5 tracking-tight',
            'text-neutral-200 font-bold focus:outline-none',
            selected
              ? 'bg-primary border border-primary text-white'
              : 'hover:bg-primary hover:text-white border border-neutral-500 hover:border-orange-500',
          ]">
            {{ day.name }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-10 max-w-4xl mx-auto">
        <TabPanel v-for="(day, index) in days" :key="index" :class="[
          'relative rounded-xl flex flex-row lg:gap-4',
          'focus:outline-none',
        ]">
          <div class="hours w-8 -ml-2">
            <ul>
              <li class="hour relative" v-for="(hour,index) in day.hours" :key="index">
                <span class="absolute -top-3">
                  {{ hour }}<span class="hidden sm:inline">:00</span>
                </span>
              </li>
            </ul>
          </div>
          <div class="program relative grow w-full bg-[#341819]" :style="'height:'+day.hours.length*240+'px;'">
            <NuxtLink v-for="(event, index) in day.events" :key="index" :to="event.link" class="absolute cursor-pointer w-4/5 p-4 rounded-lg left-10" :style="'top:'+event.startPosition+'px; height:'+event.duration*4+'px;'">
              <div class="absolute z-0 w-full h-full border border-neutral-500 top-0 left-0  bg-base-100  hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 opacity-75"></div>
              <div class="absolute z-10 pointer-events-none w-full h-full">
                <p class="text-white text-xs font-semibold uppercase mb-1">{{event.type}}</p>
                <h2 class="text-white font-bold text-md">{{ event.name }}</h2>
                <div class="text-white text-sm mt-1"><Icon size="16" class="mr-1 my-0" name="mingcute:time-line"></Icon> {{ event.time }}</div>
                <div class="text-white text-sm mt-1"><Icon size="16" class="mr-1 my-0" name="tdesign:location"></Icon> {{ event.location }}</div>
              </div>
            </NuxtLink>
            <div v-for="(hour,index) in day.hours" :key="index" class="hour border-t border-dashed border-neutral-700"></div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
  </div>
 
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
const days = [
  { 
    name: 'Úterý 31. 10. ',
    hours: [17,18,19,20,21],
    events: [
      {
        name: 'Zahájení festivalu',
        type: 'Zahájení',
        time: '17:00 - 17:30',
        location: 'Klub Art (Obecní dům)',
        link: '',
        startPosition: calculateTopPixels("17:00", 17),
        duration: 30
      },
      {
        name: 'Aneska & Band',
        type: 'Koncert',
        time: '17:30 - 18:15',
        location: 'Klub Art (Obecní dům)',
        link: '/ucinkujici/anezka-hruskova-band',
        startPosition: calculateTopPixels("17:30", 17),
        duration: 45
      },
      {
        name: '3testry',
        type: 'Inscenace',
        time: '18:45 - 19:45',
        location: 'Klub Art (Obecní dům)',
        link: '/ucinkujici/3testry',
        startPosition: calculateTopPixels("18:30", 17),
        duration: 60
      },
      {
        name: 'Jana Orlová',
        type: 'Performance',
        time: '20:00 - 20:30',
        location: 'Klub Art (Obecní dům)',
        link: '/ucinkujici/orlova',
        startPosition: calculateTopPixels("19:45", 17),
        duration: 30
      },
      {
        name: 'Rave in a grave',
        type: 'Koncert',
        time: '20:45 - 21:45',
        location: 'Klub Art (Obecní dům)',
        link: '/ucinkujici/rave-in-a-grave',
        startPosition: calculateTopPixels("20:15", 17),
        duration: 60
      }
    ]
  },
  { 
    name: 'Středa 1. 11.',
    hours: [15,16,17,18,19,20,21,22,23],
    events: [
      {
        name: 'Filip Teller',
        type: 'Workshop',
        time: '15:00 - 17:00',
        location: 'Hauerova 4',
        link: '/ucinkujici/teller-workshop',
        startPosition: calculateTopPixels("15:00", 15),
        duration: 120
      },
      {
        name: 'V pasti',
        type: 'Inscenace',
        time: '17:30 - 18:30',
        location: 'Hauerova 4',
        link: '/ucinkujici/vpasti',
        startPosition: calculateTopPixels("17:30", 15),
        duration: 60
      },
      {
        name: 'Filip Teller',
        type: 'Stand up',
        time: '18:50 - 20:00',
        location: 'Hauerova 4',
        link: '/ucinkujici/teller',
        startPosition: calculateTopPixels("18:50", 15),
        duration: 70
      },
      {
        name: 'Chops',
        type: 'Koncert',
        time: '20:15 - 21:45',
        location: 'Hauerova 4',
        link: '/ucinkujici/chops',
        startPosition: calculateTopPixels("20:15", 15),
        duration: 90
      },
      {
        name: 'Neminem',
        type: 'Koncert',
        time: '22:15 - 23:00',
        location: 'Hauerova 4',
        link: '/ucinkujici/neminem',
        startPosition: calculateTopPixels("22:15", 15),
        duration: 45
      }
    ]
  },
  { 
    name: 'Čtvrtek 2. 11.',
    hours: [15,16,17,18,19,20,21,22,23],
    events: [
      {
        name: 'Pavel Nowak',
        type: 'Workshop',
        time: '15:00 - 16:30',
        location: 'Hauerova 4',
        link: '/ucinkujici/pavel-nowak',
        startPosition: calculateTopPixels("15:00", 15),
        duration: 90
      },
      {
        name: 'Halloweenské slam poetry a dlabání dýní',
        type: 'Slam poetry',
        time: '17:00 - 19:00',
        location: 'Hauerova 4',
        startPosition: calculateTopPixels("17:00", 15),
        duration: 120
      },
      {
        name: 'Barmanky',
        type: 'Inscenace',
        time: '20:15 - 21:30',
        location: 'Klub Art (Obecní dům)',
        link: '/ucinkujici/barmanky',
        startPosition: calculateTopPixels("20:15", 15),
        duration: 75
      },
      {
        name: 'Fredy & Krasty',
        type: 'Koncert',
        time: '22:00 - 23:00',
        location: 'Hauerova 4',
        link: '/ucinkujici/fredy-krasty',
        startPosition: calculateTopPixels("22:00", 15),
        duration: 60
      },
      {
        name: 'Nihillism',
        type: 'Koncert',
        time: '23:00 - 1:00',
        location: 'Hauerova 4',
        link: '/ucinkujici/nihillism',
        startPosition: calculateTopPixels("23:00", 15),
        duration: 60
      }
    ]
  }
];

function calculateTopPixels(startTime, intervalStartHour) {
  // Parse the start time and time interval strings to Date objects
  const startTimeParts = startTime.split(':');
  const startHour = parseInt(startTimeParts[0], 10);
  const startMinute = parseInt(startTimeParts[1], 10);

  // Calculate the number of minutes since midnight for the start time
  const startMinutesSinceMidnight =
    startHour * 60 + startMinute - (intervalStartHour * 60);

  // Calculate the height of each timeslot (1 hour in minutes)
  const timeslotHeight = 60;

  // Calculate the top position in pixels
  const topPixels = (startMinutesSinceMidnight / timeslotHeight) * 240;

  return topPixels;
}
</script>

<style scoped>
.hour{
  height: 240px;
}
</style>