import React, { useState, useEffect } from 'react';

// Component for Text-to-Voice functionality
const TextToVoice = (props) => {
  // State variables for text-to-voice settings
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Speech Synthesis API
  const synthesis = window.speechSynthesis;

  const handleSpeak = () => {
    if (synthesis.speaking) {
      synthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(props.text);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;

      utterance.onend = () => setIsSpeaking(false);

      synthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handlePause = () => {
    synthesis.pause();
    setIsSpeaking(false);
  };

  const handleResume = () => {
    synthesis.resume();
    setIsSpeaking(true);
  };

  const handleStop = () => {
    synthesis.cancel();
    setIsSpeaking(false);
  };

  // Handle voice selection change
  const handleVoiceChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const lang = selectedOption.getAttribute('data-lang');
    const name = selectedOption.getAttribute('data-name');

    const voice = synthesis.getVoices().find(v => v.lang === lang && v.name === name);
    setSelectedVoice(voice);
  };

  // Effect hook to populate voice list on mount and when voices change
  useEffect(() => {
    const populateVoiceList = () => {
      if (typeof synthesis === 'undefined') {
        return;
      }

      const voices = synthesis.getVoices();
      const voiceSelect = document.getElementById('voiceSelect');

      voiceSelect.innerHTML = ''; // Clear previous options

      for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        if (voices[i].default) {
          option.textContent += ' — DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
      }
    };

    populateVoiceList();

    if (typeof synthesis !== 'undefined' && synthesis.onvoiceschanged !== undefined) {
      synthesis.onvoiceschanged = populateVoiceList;
    }
  }, [synthesis]);

  // Render the TextToVoice component
  return (
    <div>
      <div>
        <label htmlFor="pitch">Pitch:</label>
        <input
          type="range"
          id="pitch"
          min="0.1"
          max="2"
          step="0.1"
          value={pitch}
          onChange={(e) => setPitch(parseFloat(e.target.value))}
        />
        <label htmlFor="rate">Rate:</label>
        <input
          type="range"
          id="rate"
          min="0.1"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
        <label htmlFor="volume">Volume:</label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>

      <div>
        <select id="voiceSelect" onChange={handleVoiceChange}></select>
      </div>

      <div>
        {!isSpeaking && <button onClick={handleSpeak}>Speak</button>}
        {isSpeaking && <button onClick={handlePause}>Pause</button>}
      </div>

      <div>
        {!isSpeaking && <button onClick={handleResume}>Resume</button>}
        {isSpeaking && <button onClick={handleStop}>Stop</button>}
      </div>


    </div>
  );
};

export default TextToVoice;