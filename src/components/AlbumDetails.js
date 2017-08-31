import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    thumbnail_image,
    image,
    title,
    artist,
    url
  } = album;
  const {
    thumbnailContainerStyle,
    headerTextStyle,
    headerContentStyle,
    imageStyle
  } = styles;

  return (
    <Card>

      <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              source={{ uri: thumbnail_image }}
              style={{ width: 50, height: 50 }}
            />
          </View>

          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy Now
        </Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: 300
  }
}

export default AlbumDetail;
