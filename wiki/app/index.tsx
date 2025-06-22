import { useRouter } from 'expo-router'
import { Dimensions, Image, View } from 'react-native'
import ThemedButton from '../assets/components/Button'
import ChangaText from '../assets/components/ChangaText'
import Pane from '../assets/components/Pane'
import Separator from '../assets/components/Separator'
import { useTheme } from '../assets/themes/ThemeContext'
import { darkTheme, lightTheme } from '../assets/themes/themes'

export default function Index() {
  const { theme } = useTheme()
  const colors = theme === 'light' ? lightTheme : darkTheme
  const router = useRouter()
  const screenHeight = Dimensions.get('window').height

  const paneWidth = 600
  const paneHeight = 65
  const paneSpacing = 10 // space between panes

  // Size for side panes (adjust as you want)
  const sidePaneWidth = 275
  const sidePaneHeight = 60
  const sidePaneSpacing = 20
  const sideGroupHeight = -300

  return (
    <View style={{ flex: 1 }}>
      {/* Center panes */}
      <View
        style={{
          position: 'absolute',
          top: screenHeight / 3 - paneHeight / 2,
          left: '50%',
          transform: [{ translateX: -paneWidth / 2 }],
        }}
      >
        <Pane
          preset="green"
          style={{
            width: paneWidth,
            height: paneHeight,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ChangaText type="title">Toby Benjamin Clark</ChangaText>
        </Pane>
      </View>

      <View
        style={{
          position: 'absolute',
          top: screenHeight / 3 - paneHeight / 2 + paneHeight + paneSpacing,
          left: '50%',
          transform: [{ translateX: -paneWidth / 2 }],
        }}
      >
        <Pane preset="green" style={{ width: paneWidth, justifyContent: 'center', alignItems: 'center' }}>
          <ChangaText type="paragraph">
            Tavernstalk offers the user a distinct choice instead of simply assuming the user wants to remain safe. Tweaking the parameters allows the
            algorithm to suggest dangerous routes, leading long walks through high crime areas to shady pubs and taverns - aptly named the Warriors Walk.
            {'\n\n'}
            However (and more usefully) we also generate the safest pub crawls based on data obtained via the Police API (yes this exists), named "The Peacekeepers Path".
            Blah Blah Blah blah blah blah blah blah blah blah blah.
            {'\n\n'}
            Anyways, named "The Peacekeepers Path". Blah Blah Blah blah blah blah blah blah blah blah blah.
          </ChangaText>
          <ThemedButton preset = "lightBlue" style={{ marginTop: 20, width: 550 }} title="Projects & Hackathons" onPress={() => router.push('/projects')} />
          <ThemedButton preset = "lightBlue" style={{ marginTop: 10, width: 550 }} title="Academic Endeavours" />
          <Separator style={{ marginVertical: 20 }} />

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <ThemedButton preset = "lightBlue" style={{ flex: 1, width: 275 }} title="Github Profile" />
            <ThemedButton preset = "lightBlue" style={{ flex: 1, width: 275 }} title="Linkedin Profile" />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <ThemedButton preset = "lightBlue" style={{ flex: 1, width: 275 }} title="CV File" />
            <ThemedButton preset = "lightBlue" style={{ flex: 1, width: 275 }} title="Contact Me" />
          </View>
        </Pane>
      </View>

      {/* Left group of panes */}
      <View
        style={{
          position: 'absolute',
          top: screenHeight / 3 - sideGroupHeight  / 2,
          left: '50%',
          transform: [{ translateX: -paneWidth / 2 - 413 - sidePaneSpacing }],
          width: sidePaneWidth * 2 + sidePaneSpacing,
        }}
      >
        {/* Top row: two panes side by side */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <View style={{ height: 289, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Pane preset="red" style={{ width: 154, height: 154, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/images/menu/writings.png')} style={{ width: 140, height: 140, resizeMode: 'contain' }} />
            </Pane>
            <ThemedButton preset="red" title="Writings" style={{ width: 154 }} />
          </View>
          <View style={{ marginLeft: 20, height: 289, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Pane preset="yellow" style={{ width: 239, height: 239, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/images/menu/paintings.png')} style={{ width: 218, height: 218, resizeMode: 'contain' }} />
            </Pane>
            <ThemedButton preset="yellow" title="Paintings" style={{ width: 239 }} />
          </View>
        </View>

        {/* Bottom pane spanning both */}
        <Pane
          preset="green"
          style={{
            width: 411,
            height: 140,
            marginTop: 10,
            paddingVertical: 10,
            justifyContent: 'space-between',
          }}
        >
          <ChangaText type="paragraph">
            Painting or something?
          </ChangaText>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <ThemedButton preset = "lightBlue" style={{ flex: 1, width: 185 }} title="Writings" />
            <ThemedButton preset = "lightBlue" style={{ flex: 1, width: 185 }} title="Gallery" />
          </View>
        </Pane>

      </View>

      {/* Right group of panes */}
      <View
        style={{
          position: 'absolute',
          top: screenHeight / 3 - sideGroupHeight  / 2,
          left: '50%',
          transform: [{ translateX: paneWidth / 2 + sidePaneSpacing }],
          width: sidePaneWidth * 2 + sidePaneSpacing,
        }}
      >
        {/* Top row: two panes side by side */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <View style={{ height: 289, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Pane preset="blue" style={{ width: 239, height: 239, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/images/menu/toby.png')} style={{ width: 218, height: 218, resizeMode: 'contain' }} />
            </Pane>
            <ThemedButton preset="blue" title="Toby (me)" style={{ width: 239 }} />
          </View>
          <View style={{ marginLeft: 20, height: 154, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Pane preset="pink" style={{ width: 154, height: 154, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/images/menu/amber.png')} style={{ width: 140, height: 140, resizeMode: 'contain' }} />
            </Pane>
            <ThemedButton preset="pink" title="Amber" style={{ width: 154 }} />
          </View>
        </View>


        <Pane
          preset="green"
          style={{
            width: 411,
            height: 140,
            marginTop: 10,
            paddingVertical: 10,
            justifyContent: 'space-between',
          }}
        >
          <ChangaText type="paragraph">
            Amber or something
          </ChangaText>

          <View style={{ alignItems: 'center' }}>
            <ThemedButton
              preset="lightBlue"
              style={{ width: 375 }}
              title="Check out Amber's Wiki"
            />
          </View>
        </Pane>


      </View>
    </View>
  )
}
