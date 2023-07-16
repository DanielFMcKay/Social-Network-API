// for timestamping posts; should probably add hours and minutes to this

module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY with HH:mm AM/PM
      return date.toLocaleDateString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true });
    },
};
