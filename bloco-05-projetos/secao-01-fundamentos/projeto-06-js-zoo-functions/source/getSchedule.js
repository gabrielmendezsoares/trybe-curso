const { species, hours } = require('../data/script-01');

const getZooSchedule = () => Object
  .entries(hours)
  .reduce((accumulator, [key, value]) => {
    const [hourMessage, availableList] = (key === 'Monday')
      ? ['CLOSED', 'The zoo will be closed!']
      : [`Open from ${value.open}am until ${value.close}pm`, species
          .filter((specie) => specie.availability.includes(key))
          .map((specie) => specie.name)
        ];

    accumulator[key] = {
      officeHour: hourMessage,
      exhibition: availableList
    };

    return accumulator;
  }, {});

const getMondaySchedule = () => ({
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!'
  }
});

const getDaySchedule = (day) => {
  const [hourMessage, availableList] = [
    `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    species
      .filter((specie) => specie.availability.includes(day))
      .map((specie) => specie.name)
  ];

  return {
    [day]: {
      officeHour: hourMessage,
      exhibition: availableList
    }
  };
};

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) return getZooSchedule();
  if (scheduleTarget === 'Monday') return getMondaySchedule();

  const weekDays = Object.keys(hours);

  if (weekDays.includes(scheduleTarget)) return getDaySchedule(scheduleTarget);

  const specieObject = species
    .find((specie) => specie.name === scheduleTarget);

  if (!specieObject) return getZooSchedule();

  return specieObject.availability;
};

module.exports = getSchedule;
