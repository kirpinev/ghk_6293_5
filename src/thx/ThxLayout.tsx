import { Typography } from "@alfalab/core-components/typography";
import moai from "../assets/bigSmile.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { Gap } from "@alfalab/core-components/gap";
import { useEffect } from "react";

export const ThxLayout = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white !important";
  }, []);

  return (
    <>
      <div className={thxSt.container} style={{ backgroundColor: "white" }}>
        <img
          alt="Картинка ракеты"
          src={moai}
          width={250}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          weight="bold"
        >
          Такого вы точно не ожидали
        </Typography.TitleResponsive>
        <Gap size={8} />
        <Typography.Text tag="p" view="primary-medium">
          Вы только что поучаствовали в настоящем эксперименте. Сервиса не
          существует. Мы скоро предложим лучшие условия!
        </Typography.Text>
      </div>
      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href="">
          Спасибо, понятно!
        </ButtonMobile>
      </div>
    </>
  );
};
