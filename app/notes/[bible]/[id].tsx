import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const StyledContainer = styled.ScrollView`
  color: #1a1d21;
  background-color: white;
  padding-left: 5%;
  padding-right: 5%;
  flex: 1;
`;

const StyledHeader = styled.View`
  margin-bottom: 6%;
`;

const StyledTitle = styled.Text`
  font-size: 40px;
  font-weight: 600;
`;

const StyledCategoryHeader = styled.View`
  padding-top: 5%;
  padding-bottom: 5%;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const StyledCategoryText = styled.Text`
  color: #737e7e;
  font-size: 16px;
`;

const StyledBody = styled.View`
  padding-bottom: 15%;
`;

export default function Page() {
  const { bible, id } = useLocalSearchParams();

  return (
    <StyledContainer>
      <StyledCategoryHeader>
        <StyledCategoryText>
          {decodeURI(typeof bible === "string" ? bible : "")}
        </StyledCategoryText>
        <StyledCategoryText> - </StyledCategoryText>
        <StyledCategoryText>29/08/2023</StyledCategoryText>
      </StyledCategoryHeader>
      <StyledHeader>
        <StyledTitle>1:1-10</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          rhoncus pharetra nunc. Quisque eu sodales orci, nec pellentesque elit.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nullam interdum maximus libero, non condimentum
          est dignissim sit amet. Suspendisse aliquet libero eget bibendum
          commodo. Mauris turpis nulla, bibendum in leo faucibus, malesuada
          porta quam. Etiam scelerisque metus ante, et ullamcorper odio aliquam
          nec. Proin bibendum odio nec sagittis dictum. Phasellus vulputate
          tortor eget mi euismod, sit amet fringilla augue tristique. Cras
          tincidunt mauris eget nisl fringilla congue. Praesent faucibus rutrum
          urna, a venenatis nunc molestie vitae. Nulla quis arcu non massa
          commodo tincidunt eu et arcu. Fusce interdum est eget urna congue
          consequat. Donec dictum malesuada erat, a suscipit ipsum pharetra
          vitae. Proin condimentum, metus vel scelerisque varius, odio tellus
          congue ipsum, vitae aliquam tortor velit vitae odio. Ut scelerisque
          sollicitudin augue ut dapibus. Maecenas consequat auctor eros non
          posuere. Cras varius erat odio, a vehicula massa laoreet interdum.
          Proin ut sem vel nibh lobortis facilisis. Phasellus scelerisque, nulla
          at elementum euismod, augue purus interdum orci, id accumsan mauris
          lectus et nibh. Vivamus turpis mi, hendrerit euismod volutpat nec,
          rhoncus sit amet urna. Morbi fringilla et leo et pharetra. Integer
          facilisis luctus porta. Aliquam viverra, nisl ac aliquet volutpat, ex
          mauris commodo risus, a bibendum enim nulla vel ante. Sed ligula nisl,
          dapibus a fringilla eu, sodales eget turpis. Fusce lobortis quam ut
          tellus tincidunt, sed vulputate enim fringilla. Aenean sit amet risus
          quis dolor viverra fermentum vitae a nibh. Nunc volutpat lectus leo,
          quis gravida est eleifend quis. Aliquam magna enim, aliquet sit amet
          diam pretium, dignissim ullamcorper velit. Nam hendrerit feugiat
          sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Vestibulum viverra molestie nibh sed vulputate. Cras in blandit ante,
          vitae volutpat enim. Sed ut ligula orci. Praesent in faucibus elit.
          Sed eu tempor metus, eu pretium velit. Curabitur ac dolor sed sapien
          rutrum facilisis nec sed augue. Mauris sed massa ut odio vehicula
          elementum quis in est. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Phasellus pellentesque
          eleifend urna, vel sagittis risus dictum rhoncus. Praesent at
          imperdiet diam. Donec tincidunt porttitor elit id mollis. Vestibulum
          aliquet facilisis placerat. Duis luctus ullamcorper lorem vel
          interdum. In sagittis at odio a vulputate. Donec maximus et metus eget
          mattis. In commodo in ipsum a rhoncus. Aliquam maximus arcu nec purus
          ultrices egestas. Sed condimentum feugiat turpis, eget fringilla
          tellus. Maecenas et lectus erat. Donec eleifend scelerisque porttitor.
          Proin euismod porttitor diam, in sodales mauris egestas a. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Donec suscipit, ligula a vulputate elementum, mauris erat
          hendrerit elit, eu varius odio metus vel mauris. Nullam posuere, mi ac
          egestas vestibulum, ipsum leo pretium orci, ut tempor arcu dui sed
          felis. Maecenas feugiat lorem ligula, nec malesuada tellus pulvinar
          ullamcorper. Mauris a nunc malesuada, ornare lectus ac, tristique
          lectus. Maecenas gravida urna id sem sollicitudin, non malesuada arcu
          facilisis. Aliquam venenatis iaculis nibh, eu commodo sapien
          pellentesque at. Nulla facilisi. Praesent metus ligula, dignissim in
          urna et, aliquam aliquet arcu. Duis commodo elit vitae pellentesque
          facilisis. Quisque vel ex ut nisi aliquet ultrices eu sit amet magna.
          Mauris tempor velit vitae rhoncus pulvinar. Ut fermentum vehicula
          fringilla. Maecenas ornare blandit elit at efficitur. Phasellus at sem
          pellentesque, consectetur dolor vitae, dictum eros. Vivamus sit amet
          risus mi. Proin elit turpis, porta et enim ac, pulvinar tempus turpis.
          Integer in mi ultrices, tincidunt justo eu, iaculis sem. Maecenas quam
          arcu, sagittis vitae velit a, cursus pellentesque enim. In maximus
          ligula erat, quis congue nunc dapibus ac. Aliquam commodo libero vitae
          lacus tincidunt venenatis. Aliquam consequat euismod bibendum. Proin
          molestie vel ligula id dictum. Vestibulum elementum a eros sed
          malesuada. Proin vehicula, mauris vel cursus ornare, nunc neque
          egestas lacus, sodales venenatis libero nibh sit amet erat. Aliquam
          porta aliquet eros eget posuere. In eu diam rutrum, euismod lectus
          eget, varius augue. Integer ut vulputate nisi. Nunc bibendum urna vel
          mollis facilisis. Praesent in arcu eget erat vehicula maximus. Nulla
          facilisi. Vestibulum vulputate magna eu turpis maximus, sed blandit
          augue bibendum. Phasellus magna erat, rutrum eget nunc a, fringilla
          ultrices ex. Nullam tempor felis arcu, ut porttitor elit eleifend ut.
          Nulla pretium rhoncus velit. Morbi odio tellus, consectetur at ligula
          eu, pulvinar tempus nisl. Phasellus interdum vestibulum consequat. Sed
          a tempus erat. Suspendisse a ipsum fermentum, finibus arcu quis,
          commodo dolor. Nam non sapien a turpis porta euismod. Morbi ultricies
          nec est ut pulvinar. Vestibulum a egestas neque. Donec sit amet nulla
          ipsum. Donec maximus eros sapien. Vivamus sem arcu, pulvinar ac
          rhoncus sed, ultrices in mauris. Nullam eu nunc dui. Suspendisse ac
          purus eu justo tristique laoreet. Aenean ultricies tellus a nisi
          venenatis semper. Integer iaculis dolor vitae magna faucibus
          vulputate. Donec vel volutpat sem, vel rutrum lectus. Duis suscipit,
          turpis sit amet lobortis scelerisque, nibh orci scelerisque magna, nec
          elementum risus dui sollicitudin sem. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Nam cursus,
          ipsum id ullamcorper semper, justo est consectetur mi, in tincidunt
          diam lacus molestie sapien. Sed viverra ipsum vitae dui molestie, eu
          fringilla libero rutrum. Praesent pulvinar scelerisque risus et
          tristique.
        </Text>
      </StyledBody>
    </StyledContainer>
  );
}
