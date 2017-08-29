import React from 'react';
import { View, Text, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>

      <CardSection>
        <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
          <View>
            <Image
              source={{ uri: props.album.thumbnail_image }}
              style={{ width: 50, height: 50 }}
            />
          </View>

          <View style={styles.contentStyle}>
            <Text>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
          </View>
        </View>
      </CardSection>

    </Card>
  );
};

const styles = {
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
}

export default AlbumDetail;
