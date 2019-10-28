import React, {PureComponent, ReactNode} from 'react';
import {NavigationScreenProps, ScrollView} from 'react-navigation';
import {Text, TouchableOpacity} from 'react-native';

export class ActivityDetailScreen extends PureComponent<NavigationScreenProps> {
  public render(): ReactNode {
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ActivityListScreen')}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            interdum tincidunt ipsum. Fusce euismod pretium urna at placerat.
            Pellentesque pulvinar lectus vitae felis porttitor, et pulvinar
            augue auctor. Nunc ut mi eget velit feugiat laoreet. Maecenas eget
            nisi neque. Cras aliquet neque ut nulla placerat sollicitudin. Donec
            sed lorem lectus. Quisque tincidunt mi et nisi volutpat, eu dapibus
            turpis auctor. Etiam in nunc vestibulum, egestas urna eu, mattis
            dui. Mauris euismod massa ipsum, at varius elit eleifend id. Ut
            maximus vehicula elit ac accumsan. Nam non metus enim. Quisque in
            luctus diam, id dignissim velit. Proin tempor imperdiet quam non
            pretium. Ut sagittis est ac arcu ultricies, ac ornare arcu varius.
            Aenean lobortis interdum urna at faucibus. Praesent eros neque,
            dapibus ut erat aliquet, pharetra dictum urna. Ut auctor efficitur
            massa, porttitor suscipit risus scelerisque et. Suspendisse
            tincidunt ac diam eu ultrices. Etiam pretium sagittis sem, vel
            tempus velit luctus at. Sed sit amet rhoncus quam.
          </Text>
          <Text>
            Nunc sodales tincidunt lectus id consectetur. Aenean cursus sagittis
            elit, at eleifend diam semper sit amet. Vivamus faucibus, ligula
            eget fermentum laoreet, odio orci ultrices leo, dapibus sollicitudin
            tortor augue eget urna. Nullam porttitor sem ut euismod viverra.
            Proin sit amet vehicula ligula. Duis lectus lorem, laoreet in tempus
            sit amet, hendrerit eget elit. Donec accumsan vestibulum ex a
            condimentum. Fusce sem nisi, mollis sit amet orci eu, auctor
            eleifend justo. Donec tempor ligula vitae finibus euismod. Etiam at
            elit vel ipsum posuere placerat. Proin finibus sagittis arcu, sed
            semper tellus laoreet quis. Vestibulum sit amet pretium nulla, eu
            sodales massa. Aenean fringilla nibh non ante gravida feugiat.
            Maecenas consectetur sem fermentum, finibus lacus nec, ornare
            tortor. Morbi sed nibh ullamcorper lectus posuere hendrerit. Integer
            nec mattis velit.
          </Text>
          <Text>
            Curabitur eu metus et mi feugiat fringilla. Nullam nec diam elit.
            Proin vitae sapien consectetur, suscipit ligula eu, ornare tellus.
            Morbi purus orci, tincidunt at neque sed, gravida blandit metus.
            Donec blandit nulla odio, id rutrum dui tincidunt eu. Morbi mollis
            feugiat porttitor. Sed ornare id risus eu vestibulum. Vivamus cursus
            id lorem at faucibus. Pellentesque tempus massa eu enim venenatis
            consequat ac sit amet velit. Nulla faucibus a velit at tristique.
            Proin et eros eu purus dignissim pharetra id nec felis. Praesent ut
            dui et nisi facilisis sollicitudin. Nam posuere fringilla laoreet.
            Integer lectus quam, eleifend non lobortis sed, efficitur a nisi.
            Pellentesque finibus lacus eu pharetra venenatis. Nam eget ultricies
            ipsum. Maecenas id venenatis sem. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Aliquam hendrerit interdum dui
            iaculis bibendum. Morbi elementum gravida tortor, non hendrerit
            nulla. Curabitur aliquet mi nisi, sit amet tempus lorem ultricies
            vitae. Proin rutrum faucibus consectetur. Duis pellentesque
            porttitor ornare. Nullam fringilla euismod sodales. Nam ornare orci
            lacus, sed placerat dolor tempus eget.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
