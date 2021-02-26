import React from 'react';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';
import { Container, Row, Column, Panel, Gallery, Section, Description } from './styles';

import tshirtImage from '../../assets/tshirt.png';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt"/>
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection/>
          <WarrantySection/>
          <WarrantySection/>
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem ipsum dolor</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do Vendor</p>
        <p className="description">
          sem garantia
        </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui non sunt sit quis. Eum expedita doloremque tenetur facilis temporibus saepe sunt aliquam eos quos nihil pariatur, cupiditate, asperiores officiis ex?
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper aliquet ipsum vitae vehicula. In hac habitasse platea dictumst. Nunc sed ante elit. Pellentesque commodo sapien consequat nisi efficitur interdum. Pellentesque condimentum velit diam, vel facilisis massa elementum ut. Nam metus ligula, consequat sed ipsum sit amet, aliquam dignissim ipsum. Duis condimentum lacinia facilisis. Proin sagittis tristique odio et dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam commodo urna fermentum felis rutrum ultricies imperdiet ut neque. Cras vitae odio at nibh bibendum tempor eu id nibh. Quisque aliquet dapibus justo sit amet eleifend. Nulla purus nunc, placerat sit amet leo nec, ultricies ullamcorper risus. Pellentesque pulvinar ut tellus eget pharetra. Vivamus non consequat lorem.
      Sed finibus interdum sem vel mollis. Quisque quis dignissim dolor, non aliquam lorem. Suspendisse vestibulum bibendum lacus quis viverra. Vivamus lorem diam, cursus sed ligula eu, eleifend semper lorem. Nullam ultricies leo et lacus imperdiet eleifend. Curabitur vitae velit vel massa gravida molestie fringilla sed erat. Sed nulla justo, pretium id malesuada et, imperdiet at libero. Morbi augue diam, suscipit sit amet lectus quis, vestibulum malesuada diam. Curabitur dignissim in velit id mollis. Praesent congue efficitur lectus, imperdiet suscipit mauris placerat sit amet. Ut ornare ligula id elit feugiat, sodales faucibus magna egestas. Suspendisse egestas urna sit amet magna pulvinar vehicula.
      Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas eleifend, tortor nec vestibulum suscipit, ex ex commodo nibh, nec facilisis nunc turpis ac urna. Mauris vulputate pharetra magna. In hac habitasse platea dictumst. Pellentesque id lacinia dui. Nullam laoreet lectus at nisl egestas tempus nec ut velit. Duis ligula turpis, tincidunt ac eros quis, luctus maximus mauris. Proin venenatis elit justo, nec dapibus lectus ultricies sit amet. Praesent in dignissim nunc.
    </p>
  </Description>
)

export default Product;
