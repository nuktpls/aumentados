import React from "react";
import { Row } from "../../components/InsertRow";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import HeadingBlock from "@BlockBuilder/HeadingBlock";
const FooterBlock = ({
  githubImg,
  instaImg,
  whatsImg,
  zankyouImg,
  youTubeImg,
  facebookImg,
  casamentospontocomImg,
  logo,
}) => {
  const githubGetImg = getImage(githubImg.childrenImageSharp[0]);
  const instaGetImg = getImage(instaImg.childrenImageSharp[0]);
  const whatsGetImg = getImage(whatsImg.childrenImageSharp[0]);
  const zankyouImgProp = getImage(zankyouImg.childrenImageSharp[0]);
  const youTubeGetImg = getImage(youTubeImg.childrenImageSharp[0]);
  const faceGetImg = getImage(facebookImg.childrenImageSharp[0]);
  const casamentospontocomGetImg = getImage(
    casamentospontocomImg.childrenImageSharp[0]
  );

  function socialMe(img, link) {
    if (!img && !link) {
      return null;
    }
    return (
      <a
        href={link}
        className='social-icon-wrapper'
        rel='nofollow'
        target={"_blank"}
      >
        <GatsbyImage
          image={img}
          alt={"title"}
          placeholder={"NONE"}
          critical='true'
          className={"colorME roundME bottom-social"}
        />
      </a>
    );
  }
  return (
    <>
      <HeadingBlock classes='m30auto hack' importance={9} width={400}>
        Social
      </HeadingBlock>
      <Row opt={{ isBoxed: true }}>
        <Row
          opt={{
            isBoxed: true,
            alignTo: "center",
            classes: "social-icons",
            numColumns: 5,
          }}
        >
          {socialMe(instaGetImg, "https://www.instagram.com/aumentados_")}
          {socialMe(
            zankyouImgProp,
            "https://www.zankyou.com.br/f/aumentados-976737"
          )}
          {socialMe(
            casamentospontocomGetImg,
            "https://www.casamentos.com.br/cerimonialista/aumentados-de-ribeirao--e192771"
          )}
          {socialMe(
            faceGetImg,
            "https://www.facebook.com/profile.php?id=100016966816287"
          )}
          {socialMe(
            youTubeGetImg,
            "https://www.youtube.com/channel/UCa7WCZgri320eSCS-7rr38g"
          )}
          {socialMe(
            whatsGetImg,
            "https://api.whatsapp.com/send?phone=5516992452437"
          )}
          {socialMe(githubGetImg, "https://github.com/aumentados/web-site")}
        </Row>
        <Row opt={{ isBoxed: true, classes: "logo-bottom-wrapper" }}>
          <div className='footer-logo'>{logo}</div>
          {/* <BoilerplateLogo className='m0auto logo-bottom' /> */}
          <p className='m0auto bottom-paragraph'>
            ?? 2022 AUMENTADOS - TODOS OS DIREITOS RESERVADOS
          </p>
        </Row>
      </Row>
    </>
  );
};

export default FooterBlock;
