import React from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SuportIcon,
  ClockIcon,
  More,
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o Vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
          <strong>Barretos, São Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>567</strong>
            <span>vendas nos últimos 4 meses</span>
          </div>

          <div>
            <strong><SuportIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>
          <div>
            <strong><ClockIcon /></strong>
            <span>vendas nos últimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do Vendedor</More>
    </Container>
  );
};

export default SellerInfo;
