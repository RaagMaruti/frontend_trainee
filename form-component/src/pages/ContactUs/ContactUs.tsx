"use client";

import { useState, useEffect } from "react";
import styles from "./ContactUs.module.css";
import Form from "../../components/Form/Form";
import AwardsCarousel from "../../components/AwardsCarousel/AwardsCarousel";

export default function ContactUs() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./constant/data.json");
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const listComp1 = data?.companies?.images1.map((c: any) => (
    <img
      className={styles.companiesImage}
      key={c.id}
      src={c.src}
      alt="company logo"
      draggable="false"
    />
  ));

  const listComp2 = data?.companies?.images2.map((c: any) => (
    <img
      className={styles.companiesImage}
      key={c.id}
      src={c.src}
      alt="company logo"
      draggable="false"
    />
  ));

  return (
    <div className={styles.mainContainer}>
      {data?.contactUs && (
        <>
          <div className={styles.formContainer}>
            <div className={styles.formFlex}>
              <div className={styles.textCard}>
                <div className={styles.gradientFont}>
                  <span>{data?.contactUs?.heading[0]}</span>
                  <br />
                  <span>{data?.contactUs?.heading[1]}</span>
                </div>
                <p>{data?.contactUs?.subHeading}</p>
              </div>
              {data?.form && <Form data={data?.form} />}
            </div>
          </div>
          <div className={styles.aboutContainer}>
            <div className={styles.exceptCarousel}>
              <img
                className={styles.redMobile}
                src={data?.contactUs?.images?.redMobile?.src}
                alt={data?.contactUs?.images?.redMobile?.alt}
                draggable="false"
              />
              <img
                className={styles.redTablet}
                src={data?.contactUs?.images?.redTablet?.src}
                alt={data?.contactUs?.images?.redTablet?.alt}
                draggable="false"
              />
              <img
                className={styles.redTop}
                src={data?.contactUs?.images?.redTop?.src}
                alt={data?.contactUs?.images?.redTop?.alt}
                draggable="false"
              />
              <img
                className={styles.logo}
                src={data?.contactUs?.images?.logo?.src}
                alt={data?.contactUs?.images?.logo?.src}
              ></img>
              <div className={styles.flexContainer}>
                {data?.companies && (
                  <div className={styles.trustedBy}>
                    <span>{data?.companies?.heading}</span>
                    <div className={styles.companies}>{listComp1}</div>
                    <div className={styles.companies}>{listComp2}</div>
                  </div>
                )}
                {data?.communication && (
                  <div className={styles.container}>
                    <div className={styles.listCards}>
                      {data?.communication?.collabHeading}
                      <div className={styles.content}>
                        <span className={styles.text}>
                          {data?.communication?.email}
                        </span>
                        <span className={styles.text}>
                          {data?.communication?.email}
                        </span>
                      </div>
                    </div>
                    <div className={styles.listCards}>
                      {data?.communication?.callHeading}
                      <div className={styles.content}>
                        <span className={styles.text}>
                          {data?.communication?.phoneNumber}
                        </span>
                        <span className={styles.text}>
                          {data?.communication?.phoneNumberHR}
                        </span>
                      </div>
                    </div>
                    <div className={styles.listCards}>
                      {data?.communication?.officeHeading}
                      <div className={styles.content}>
                        <span className={styles.text}>
                          {data?.communication?.address1[0]}{" "}
                          <img
                            src={data?.communication?.images?.indianFlag?.src}
                            alt={data?.communication?.images?.indianFlag?.alt}
                          ></img>
                          <br />
                          {data?.communication?.address1[1]}
                          <br />
                          {data?.communication?.address1[2]}
                          <br />
                          {data?.communication?.address1[3]}
                          <br />
                          {data?.communication?.address1[4]}
                        </span>
                        <span className={styles.text}>
                          {data?.communication?.address2[0]}{" "}
                          <img
                            src={data?.communication?.images?.americanFlag?.src}
                            alt={data?.communication?.images?.americanFlag?.alt}
                          ></img>
                          <br />
                          {data?.communication?.address2[1]}
                          <br />
                          {data?.communication?.address2[2]}
                          <br />
                          {data?.communication?.address2[3]}
                          <br />
                          {data?.communication?.address2[4]}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>{data?.contactUs?.awardHeading}</div>
            </div>
            {data?.awards && <AwardsCarousel data={data?.awards} />}
            <img
              className={styles.redBottom}
              src={data?.contactUs?.images?.redBottom?.src}
              alt={data?.contactUs?.images?.redBottom?.alt}
              draggable="false"
            />
          </div>
        </>
      )}
    </div>
  );
}
