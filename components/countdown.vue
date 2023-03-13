<template>
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col">
            <span class="countdown font-mono text-5xl">
                <span :style="'--value:' + remaining.days + ';'"></span>
            </span>
            dnů
        </div>
        <div class="flex flex-col">
            <span class="countdown font-mono text-5xl">
                <span :style="'--value:' + remaining.hours + ';'"></span>
            </span>
            hodin
        </div>
        <div class="flex flex-col">
            <span class="countdown font-mono text-5xl">
                <span :style="'--value:' + remaining.minutes + ';'"></span>
            </span>
            min
        </div>
        <div class="flex flex-col">
            <span class="countdown font-mono text-5xl">
                <span :style="'--value:' + remaining.seconds + ';'"></span>
            </span>
            sec
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            remaining: {
                days: 0,
                hours:0,
                minutes:0,
                seconds:0
            }
        }
    },
    created(){
        this.remaining = this.getTimeRemaining()
        setInterval(() => {
            this.remaining = this.getTimeRemaining()
        }, 1000);
    },
    methods: {
        getTimeRemaining() {
            // Set the deadline to October 31, 2023
            const deadline = new Date('2023-10-31');
    
            // Get the current time
            const now = new Date();
    
            // Calculate the time remaining in milliseconds
            const timeRemaining = deadline - now;
    
            // Calculate the number of days, hours, minutes, and seconds remaining
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
            // Return the time remaining as an object with separate properties for days, hours, minutes, and seconds
            return { days, hours, minutes, seconds };
        }
    }
}
</script>