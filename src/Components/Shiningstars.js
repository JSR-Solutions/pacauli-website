import React from "react";
import "../Styles/Shiningstars.css";
import { Col, Row } from "react-bootstrap";
import TeamMemberCard, {
  TeamMemberCard2,
  TeamMemberCard3,
} from "./TeamMemberCard";

const Shiningstars = () => {
  return (
    <div className="shiningstars-main">
      <Row className="shiningstars-row xtra">
        <Col lg={6}>
          <TeamMemberCard />
        </Col>
        <Col className="shiningstars-description" lg={6}>
          Neymar came into prominence at Santos, where he made his professional
          debut aged 17. He helped the club win two successive Campeonato
          Paulista championships, a Copa do Brasil, and the 2011 Copa
          Libertadores; the latter being Santos' first since 1963. Neymar was
          twice named the South American Footballer of the Year, in 2011 and
          2012, and soon relocated to Europe to join Barcelona. As part of
          Barcelona's attacking trio with Lionel Messi and Luis Suárez, he won
          the continental treble of La Liga, the Copa del Rey, and the UEFA
          Champions League, and finished third for the FIFA Ballon d'Or in 2015
          for his performances. He then attained a domestic double in the
          2015–16 season. In 2017, Neymar transferred to Paris Saint-Germain in
          a move worth €222 million, making him the most expensive player
          ever.[note 1] In France, Neymar won three league titles, two Coupe de
          France, and two Coupe de la Ligue, which included a domestic treble
          and being voted Ligue 1 Player of the Year in his debut season.[11]
          Neymar helped PSG attain a domestic quadruple in the 2019–20 season,
          and led the club to its first ever Champions League Final.
        </Col>
      </Row>
      <Row className="shiningstars-row">
        <Col className="shiningstars-description" lg={6}>
        Neymar came into prominence at Santos, where he made his professional
          debut aged 17. He helped the club win two successive Campeonato
          Paulista championships, a Copa do Brasil, and the 2011 Copa
          Libertadores; the latter being Santos' first since 1963. Neymar was
          twice named the South American Footballer of the Year, in 2011 and
          2012, and soon relocated to Europe to join Barcelona. As part of
          Barcelona's attacking trio with Lionel Messi and Luis Suárez, he won
          the continental treble of La Liga, the Copa del Rey, and the UEFA
          Champions League, and finished third for the FIFA Ballon d'Or in 2015
          for his performances. He then attained a domestic double in the
          2015–16 season. In 2017, Neymar transferred to Paris Saint-Germain in
          a move worth €222 million, making him the most expensive player
          ever.[note 1] In France, Neymar won three league titles, two Coupe de
          France, and two Coupe de la Ligue, which included a domestic treble
          and being voted Ligue 1 Player of the Year in his debut season.[11]
          Neymar helped PSG attain a domestic quadruple in the 2019–20 season,
          and led the club to its first ever Champions League Final.
        </Col>
        <Col lg={6}>
        <TeamMemberCard2 />
        </Col>
      </Row>
      <Row className="shiningstars-row">
        <Col lg={6}>
          <TeamMemberCard3 />
        </Col>
        <Col className="shiningstars-description" lg={6}>
        Neymar came into prominence at Santos, where he made his professional
          debut aged 17. He helped the club win two successive Campeonato
          Paulista championships, a Copa do Brasil, and the 2011 Copa
          Libertadores; the latter being Santos' first since 1963. Neymar was
          twice named the South American Footballer of the Year, in 2011 and
          2012, and soon relocated to Europe to join Barcelona. As part of
          Barcelona's attacking trio with Lionel Messi and Luis Suárez, he won
          the continental treble of La Liga, the Copa del Rey, and the UEFA
          Champions League, and finished third for the FIFA Ballon d'Or in 2015
          for his performances. He then attained a domestic double in the
          2015–16 season. In 2017, Neymar transferred to Paris Saint-Germain in
          a move worth €222 million, making him the most expensive player
          ever.[note 1] In France, Neymar won three league titles, two Coupe de
          France, and two Coupe de la Ligue, which included a domestic treble
          and being voted Ligue 1 Player of the Year in his debut season.[11]
          Neymar helped PSG attain a domestic quadruple in the 2019–20 season,
          and led the club to its first ever Champions League Final.
        </Col>
      </Row>
    </div>
  );
};

export default Shiningstars;
