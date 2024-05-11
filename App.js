import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
// import styles  from './assets/css/styles.js';

export default function App() {
  return (
    <>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.header_text}>Office Tools</Text>
        </View>

        <ScrollView>
          <View style={styles.body}>
            <View style={container}>
              <View>
                <Text style={mt - 4}>AKSEu Business Solutions</Text>
                <Text style={page - title}>Simple PDF to Speech Converter</Text>
              </View>

              <View style={styles.form}>
                <View style={styles.form_group}>
                  <Text htmlFor="pitch" style={styles.body}>Pitch:</Text>
                  <input
                    type="range"
                    id="pitch"
                    style={styles.body}
                    min="0.1"
                    max="2"
                    step="0.1"
                    value={pitch}
                    // onChange={(e) => setPitch(parseFloat(e.target.value))}
                  />
                </View>

                <View style={styles.form_group}>
                  <Text htmlFor="rate" style={styles.body}>Rate:</Text>
                  <input
                    type="range"
                    id="rate"
                    style={form - range}
                    min="0.1"
                    max="2"
                    step="0.1"
                    value={rate}
                    // onChange={(e) => setRate(parseFloat(e.target.value))}
                  />
                </View>

                <View style={styles.form_group}>
                  <Text htmlFor="volume" style={styles.form_group}>Volume:</Text>
                  <input
                    type="range"
                    id="volume"
                    style={styles.body}
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    // onChange={(e) => setVolume(parseFloat(e.target.value))}
                  />
                </View>
              </View>

              <View style={styles.form_group}>
                <select id="voiceSelect" style={styles.form_select} onChange={handleVoiceChange}></select>
              </View>

              <View style={styles.form_group}>
                {!isSpeaking && <input onChange={onFileChange} style={styles.button} type="file" id="fileInput" />}
                {!isSpeaking && <button onClick={handleSpeak} style={styles.button} type="button"> <i class="fa fa-play" aria-hidden="true"></i></button>}
                {isSpeaking && <button onClick={handlePause} style={styles.button} type="button"> <i class="fa fa-pause" aria-hidden="true"></i></button>}
                {/* {!isSpeaking && <button onClick={handleResume}style={styles.button} type="button"> <i class="fa fa-play" aria-hidden="true"></i></button>} */}
                {isSpeaking && <button onClick={handleStop} style={styles.button} type="button"> <i class="fa fa-stop" aria-hidden="true"></i></button>}
              </View>

              <View>
                <Text>
                  {/* {outputText.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className={index === currentWordIndex ? 'text-danger' : 'text-dark'}
                    >
                      {word}{' '}
                    </span>
                  ))} */}
                </Text>
              </View>

              <View style={styles.body}>
                {/* {loading && <View style={loading-spinner}></View>} */}
                {/* {file && ( */}
                  <>
                    {/* <View className='d-none'>
                      <Document file={file} onLoadSuccess={onLoadSuccess}>
                        <Page
                          key={`page_${pageNumber}`}
                          pageNumber={pageNumber}
                          onRenderSuccess={(page) => extractTextFromPage(page)}
                        />
                      </Document>
                    </View> */}
                    <View style={styles.body}>
                      <button /*onClick={goToPreviousPage} disabled={pageNumber === 1} */>
                        <i class="fa fa-step-backward" aria-hidden="true"></i>
                      </button>
                      <span>
                        Page {/*pageNumber*/} of {/*numPages*/}
                      </span>
                      <button /*onClick={goToNextPage} disabled={pageNumber === numPages}*/>
                        <i class="fa fa-step-forward" aria-hidden="true"></i>
                      </button>
                    </View>
                  </>
                {/* )} */}
              </View>

            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: '16px',
    backgroundColor: 'rgb(50,50,50)',
    width: '100%',
  },
  header_text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: '18px',
  },
  body: {
    alignItems: 'center',
  },

});