import { useRouter } from 'expo-router'
import { Image, useWindowDimensions, View } from 'react-native'
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
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()

  // Central Pane Sizes
  const paneWidth = screenWidth * 0.25
  const paneHeight = screenHeight * 0.06
  const paneSpacing = screenWidth * 0.005

  // Side Panes Sizes
  const sidePaneWidth = screenWidth * 0.1
  const sidePaneSpacing = screenWidth * 0.01
  const sideGroupHeight = -(screenHeight * 0.2)
  const smallIconPane = screenWidth * 0.06
  const largeIconPane = screenWidth * 0.09
  const bottomPaneWidth = screenWidth * 0.16
  const bottomPaneHeight = screenHeight * 0.12
  const iconSizeSmall = screenWidth * 0.055
  const iconSizeLarge = screenWidth * 0.085
  const doubleButtonWidth = screenWidth * 0.075
  const wikiButtonWidth = screenWidth * 0.15
  const buttonRowWidth = screenWidth * 0.11
  const contentButtonWidth = screenWidth * 0.22

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
          <ThemedButton preset="lightBlue" style={{ marginTop: sidePaneSpacing, width: contentButtonWidth }} title="Projects & Hackathons" onPress={() => router.push('/projects')} />
          <ThemedButton preset="lightBlue" style={{ marginTop: sidePaneSpacing, width: contentButtonWidth }} title="Academic Endeavours" />
          <Separator style={{ marginVertical: sidePaneSpacing }} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <ThemedButton preset="lightBlue" style={{ flex: 1, width: buttonRowWidth }} title="Github Profile" />
            <ThemedButton preset="lightBlue" style={{ flex: 1, width: buttonRowWidth }} title="Linkedin Profile" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: paneSpacing }}>
            <ThemedButton preset="lightBlue" style={{ flex: 1, width: buttonRowWidth }} title="CV File" />
            <ThemedButton preset="lightBlue" style={{ flex: 1, width: buttonRowWidth }} title="Contact Me" />
          </View>
        </Pane>
      </View>

      {/* Left group of panes */}
      <View
        style={{
          position: 'absolute',
          top: screenHeight / 3 - sideGroupHeight / 2,
          left: '50%',
          transform: [{ translateX: -paneWidth / 2 - (screenWidth * 0.17) - sidePaneSpacing }],
          width: sidePaneWidth * 2 + sidePaneSpacing,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <View style={{ height: screenHeight * 0.25, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Pane preset="red" style={{ width: smallIconPane, height: smallIconPane, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/images/menu/writings.png')} style={{ width: iconSizeSmall, height: iconSizeSmall, resizeMode: 'contain' }} />
            </Pane>
            <ThemedButton preset="red" title="Writings" style={{ width: smallIconPane }} />
          </View>
          <View style={{ marginLeft: sidePaneSpacing, height: screenHeight * 0.25, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Pane preset="yellow" style={{ width: largeIconPane, height: largeIconPane, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/images/menu/paintings.png')} style={{ width: iconSizeLarge, height: iconSizeLarge, resizeMode: 'contain' }} />
            </Pane>
            <ThemedButton preset="yellow" title="Paintings" style={{ width: largeIconPane }} />
          </View>
        </View>

        <Pane
          preset="green"
          style={{
            width: bottomPaneWidth,
            height: bottomPaneHeight,
            marginTop: paneSpacing,
            paddingVertical: paneSpacing,
            justifyContent: 'space-between',
          }}
        >
          <ChangaText type="paragraph">Painting or something?</ChangaText>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <ThemedButton preset="lightBlue" style={{ flex: 1, width: doubleButtonWidth }} title="Writings" />
            <ThemedButton preset="lightBlue" style={{ flex: 1, width: doubleButtonWidth }} title="Gallery" />
          </View>
        </Pane>
      </View>

      {/* Right group of panes */}
      <View
        style={{
          position: 'absolute',
          top: screenHeight / 3 - sideGroupHeight / 2,
          left: '50%',
          transform: [{ translateX: paneWidth / 2 + sidePaneSpacing }],
          width: sidePaneWidth * 2 + sidePaneSpacing,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <View style={{ height: screenHeight * 0.25, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Pane preset="blue" style={{ width: largeIconPane, height: largeIconPane, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/images/menu/toby.png')} style={{ width: iconSizeLarge, height: iconSizeLarge, resizeMode: 'contain' }} />
            </Pane>
            <ThemedButton preset="blue" title="Toby (me)" style={{ width: largeIconPane }} />
          </View>
          <View style={{ marginLeft: sidePaneSpacing, height: smallIconPane, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Pane preset="pink" style={{ width: smallIconPane, height: smallIconPane, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/images/menu/amber.png')} style={{ width: iconSizeSmall, height: iconSizeSmall, resizeMode: 'contain' }} />
            </Pane>
            <ThemedButton preset="pink" title="Amber" style={{ width: smallIconPane }} />
          </View>
        </View>

        <Pane
          preset="green"
          style={{
            width: bottomPaneWidth,
            height: bottomPaneHeight,
            marginTop: paneSpacing,
            paddingVertical: paneSpacing,
            justifyContent: 'space-between',
          }}
        >
          <ChangaText type="paragraph">Amber or something</ChangaText>
          <View style={{ alignItems: 'center' }}>
            <ThemedButton
              preset="lightBlue"
              style={{ width: wikiButtonWidth }}
              title="Check out Amber's Wiki"
            />
          </View>
        </Pane>
      </View>
    </View>
  )
}
