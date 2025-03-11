import React, { useEffect } from 'react'

export const ReadingTime = () => {

  // TAKE WORDS OR CHARACTER FROM CONTEXT

  const timeByWords = (words) => {
    // Words by minutes
    const WPM = 200;
    const time = Math.ceil(words / WPM);

    if (time <= 1) return `<1 Minute(s)`;

    return `${time} Minute(s)`;
  }

  const timeByCharacters = (characters) => {
    // Characters by minutes
    const CPM = 900;
    const time = Math.ceil(characters / CPM);

    if (time <= 1) return '<1 Minute(s)';

    return `${time} Minute(s)`;

  }

  return (
    <p>Approx. reading time: </p>
  )
}
