import React, {PureComponent, ReactNode} from 'react';
import {NavigationScreenProps, ScrollView} from 'react-navigation';
import {Text, TouchableOpacity} from 'react-native';

export class ActivityListScreen extends PureComponent<NavigationScreenProps> {
  public render(): ReactNode {
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
          <Text>
            Quisque convallis dictum feugiat. Pellentesque ut lacinia ante, non
            porta nibh. Sed quis ante ligula. In consequat erat consectetur,
            molestie dolor ac, efficitur nunc. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Fusce porta
            nisl eros. Donec sem quam, rhoncus ut vehicula in, sollicitudin et
            felis. Etiam at lectus in ligula pulvinar venenatis sit amet ut
            orci. Cras molestie eu purus convallis facilisis. Curabitur congue
            tristique tellus, ac accumsan felis molestie id. Etiam consequat at
            eros ut condimentum. Vestibulum a cursus tellus. Vestibulum ut quam
            sodales, mattis urna et, elementum purus. Etiam viverra quam
            hendrerit vulputate elementum. Donec quis elit eu erat dignissim
            sollicitudin. Curabitur et odio eu neque porttitor tempus ac
            vestibulum ipsum. Pellentesque ante nisi, luctus eu magna non,
            consequat luctus felis.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
          <Text>
            Sed dictum mauris non enim mollis, a pulvinar velit egestas.
            Praesent rhoncus venenatis ullamcorper. Duis non quam a massa congue
            placerat. Phasellus placerat mauris vel ipsum egestas, ut luctus
            velit tristique. Suspendisse potenti. In nec maximus tortor, nec
            mattis mi. Donec cursus dui iaculis tempor molestie. Duis in
            accumsan est. Cras nec ex ultricies magna pulvinar mattis. Donec
            accumsan sapien quis lectus scelerisque gravida. Mauris eget massa
            lectus. Sed vel posuere lacus. Quisque faucibus tempus odio.
            Vestibulum feugiat, augue eu tempus pretium, ex odio congue ante, et
            accumsan ligula sem sed ligula. Cras consequat molestie metus et
            consectetur. Maecenas ac viverra arcu, et iaculis metus. Ut semper
            lectus at eros porttitor dapibus. Integer ante diam, auctor sed
            vestibulum eu, rhoncus sit amet risus.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
          <Text>
            Cras a lacus molestie, cursus urna a, luctus purus. Morbi arcu nunc,
            tincidunt at lectus ac, egestas elementum arcu. Phasellus tristique
            maximus mauris sed tempor. Aliquam tincidunt dolor eu lorem semper
            cursus. Sed sit amet nisi a urna mollis mollis. Donec vel tortor
            augue. Vivamus quis volutpat ante. Quisque ac ultrices ligula, ac
            efficitur urna. In tempus accumsan turpis, ac hendrerit mi viverra
            a. Nunc nisi erat, mattis eget augue a, fringilla vehicula mauris.
            Ut a tincidunt odio, sit amet aliquet tortor. Proin convallis
            euismod arcu vel accumsan. Mauris molestie nisl eget congue
            convallis. Phasellus mattis nulla eu neque consequat, sed eleifend
            purus aliquam. Cras eu enim et erat posuere cursus sed ut leo. Sed
            vitae vestibulum risus. Aenean et tellus facilisis ipsum feugiat
            eleifend. Mauris rhoncus at nunc ut tincidunt. Cras ut ligula quis
            augue efficitur maximus in a nunc. Pellentesque quam lectus, sodales
            et faucibus sed, egestas ac nunc. Donec sagittis, massa et
            sollicitudin dignissim, mauris magna euismod leo, ac mollis ante
            nulla nec felis. Nam ut tincidunt justo, a cursus odio. Sed
            tincidunt elementum commodo. In nec justo nisl. Suspendisse vel
            facilisis lacus. In vel leo congue est mattis iaculis. Curabitur non
            velit quis enim mollis accumsan vel quis diam. Donec rutrum est
            lacinia, finibus orci cursus, mattis libero. Vestibulum porta dolor
            in risus imperdiet, vitae imperdiet lacus imperdiet. Sed at purus
            tellus. Sed hendrerit tempus fringilla. Vivamus eget blandit dolor.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
          <Text>
            Phasellus accumsan nulla sit amet quam sagittis mattis. Quisque
            iaculis, tortor porta tincidunt congue, enim eros laoreet eros,
            ultrices posuere enim nulla vitae urna. Etiam et congue odio, eget
            auctor nulla. Etiam egestas sapien est, at tincidunt dolor facilisis
            non. Nam lobortis enim ac nibh finibus maximus. Integer sagittis
            tellus sit amet condimentum volutpat. Cras sodales hendrerit lectus,
            a ornare massa commodo vel. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Integer dignissim rhoncus mattis.
            Vestibulum sollicitudin ac neque et euismod. Quisque eu metus nisl.
            Donec commodo enim id purus porttitor molestie. Donec iaculis enim
            ut euismod luctus. Nam nulla nisi, elementum sit amet nunc vel,
            lobortis ultricies purus. Praesent congue sagittis vehicula.
            Suspendisse sed neque ornare, ultricies lectus non, fringilla nibh.
            Nullam dictum ultrices auctor. Sed ultrices pellentesque libero
            vitae mollis. Maecenas lobortis efficitur risus, eget dapibus magna.
            Etiam vel dapibus nulla, et eleifend risus. Nam sed commodo augue,
            in vestibulum enim. Donec molestie pharetra neque. Phasellus
            lobortis nec arcu at finibus. Nunc id varius diam, ut consequat
            magna. Maecenas ut leo eget neque varius commodo. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Mauris sed orci at sem molestie semper ut ac dui.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
          <Text>
            Nunc ac sem quis enim venenatis pharetra vitae eu elit. Fusce
            aliquam commodo purus eget commodo. Etiam commodo malesuada ligula
            eget mattis. Nunc pellentesque nisi velit, eu lobortis leo volutpat
            sodales. Ut vitae pellentesque tortor. Duis molestie diam sit amet
            leo pulvinar efficitur. In vel efficitur purus. Nulla ultrices
            bibendum metus non molestie. Etiam sed congue quam. Aliquam eu
            placerat ante. Morbi eu feugiat felis, sit amet iaculis est. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Maecenas in dolor ut elit feugiat lacinia. Vivamus
            bibendum turpis at leo luctus, ut euismod turpis tristique. Cras
            mattis turpis non eros commodo fringilla et vel diam. Curabitur quis
            gravida risus. Donec in tincidunt velit. Nullam facilisis finibus
            nibh sed malesuada. Maecenas eu eros dictum, euismod mauris dapibus,
            pulvinar ipsum. Suspendisse nibh risus, elementum vel sollicitudin
            vel, efficitur vitae orci. Aenean facilisis sagittis lorem at
            luctus. Phasellus euismod placerat risus vitae imperdiet.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
          <Text>
            Maecenas sit amet mauris massa. Ut bibendum odio et nisl elementum,
            ut aliquam tellus consequat. In sagittis tempor mattis. Praesent
            erat leo, efficitur eget sagittis et, aliquet sed felis. Suspendisse
            potenti. Maecenas velit elit, tempus dignissim tempus vitae,
            pharetra non quam. Donec leo urna, vulputate sed metus sit amet,
            tristique blandit nisi. Vestibulum et urna turpis. Nam pharetra
            nulla lorem, id convallis ante rhoncus ullamcorper. Curabitur et
            ultricies diam, nec accumsan leo. Aenean scelerisque volutpat
            ultrices. Aenean eget tellus a mauris euismod egestas. Aenean et
            libero sed risus malesuada vulputate. Aliquam erat volutpat. Vivamus
            vel tellus non elit pellentesque dignissim. Quisque aliquet placerat
            orci sed ornare. Vivamus consequat vehicula arcu, non placerat metus
            cursus suscipit. Aliquam a libero vel massa commodo porta. Sed
            venenatis, est id laoreet malesuada, ex purus aliquet nunc, in
            ultrices leo felis quis dui. Etiam risus sapien, venenatis vitae
            metus quis, rhoncus rhoncus erat.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
          <Text>
            Praesent pharetra, sapien facilisis ornare mattis, dui tellus
            elementum leo, vel mattis arcu dui vitae leo. Sed interdum maximus
            augue eu dictum. Sed ultrices id velit at porta. Proin sodales
            mauris sed leo porttitor, id dignissim quam ullamcorper. Vivamus
            mollis quis metus at egestas. Vivamus quis ligula sodales, mollis
            metus a, pellentesque nibh. Maecenas dapibus ante vel porttitor
            cursus. Curabitur vel ante pharetra, dictum augue vitae, fringilla
            diam. Nunc egestas dui vitae lacinia fringilla. Mauris cursus quam
            sed lacus mattis, non scelerisque nunc tempor. Quisque bibendum
            cursus tortor, at vulputate orci auctor ut. Suspendisse lacinia
            lectus id ipsum vulputate vestibulum. Sed malesuada tincidunt nisi,
            eget commodo nulla tincidunt pulvinar. Integer eu augue at nisl
            venenatis semper. Sed condimentum dictum fermentum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies
            magna et ipsum blandit volutpat. Vestibulum porta turpis at tellus
            eleifend, eu ullamcorper mi mattis. Cras diam tellus, vulputate ut
            sem eu, consectetur pulvinar justo. Proin pharetra est vitae dui
            molestie tincidunt. Pellentesque sapien quam, sagittis at sodales
            sed, faucibus ac massa. Duis in massa in augue egestas dictum ut
            finibus augue. Proin sagittis metus quis imperdiet commodo. Mauris
            justo nulla, facilisis at congue non, gravida vel libero.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
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
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
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
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
