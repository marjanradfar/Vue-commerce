<template>
  <div class="countdownTimer">
    <div class="countdownTimer__days item">
      <span class="backNumber">{{ displayDays }}</span>
      <span>روز</span>
    </div>

    <div class="countdownTimer__hours item">
      <span class="backNumber">{{ displayHours }}</span>
      <span>ساعت</span>

    </div>

    <div class="countdownTimer__minutes item">
      <span class="backNumber">{{ displayMinutes }}</span>
      <span>دقیقه</span>
    </div>

    <div class="countdownTimer__seconds item">
      <span class="backNumber">{{ displaySeconds }}</span>
      <span>ثانیه</span>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    },
  },
  mounted() {
    this.showRemaining()
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2024, 9, 4, 4, 10, 10);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return
        }
        const days = Math.floor((distance / this._days));
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = seconds < 10 ? "0" + seconds : seconds;
        this.displaySeconds = minutes < 10 ? "0" + minutes : minutes;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;
      },1000);
    }
  }
}

</script>

