import { useEffect, useState, useRef } from "react";
import styles from "./Login.module.css";

// 아이디는 매 입력마다 형식을 검증해도 되지만 비밀번호는 그렇게하면 감시당하고 있다는 느낌을 줄 수 있다. 따라서 비밀번호는 엔터까지 입력된 후 검증한다.

const convertRegexExecToBoolean = (regex, value) => {
  return regex.exec(value) === null;
};

const validEmailForm = new RegExp(
  "^[a-zA-Z0-9._%+-]+[₩@]+[a-zA-Z0-9.-]+[₩.]+[a-zA-Z]{2,}$"
);
const validePasswordForm = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,12}$"
);

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState({
    "id-valid": false,
    "password-valid": false,
    "result-valid": false,
  });

  const [hide, setHide] = useState({
    "id-guide": true,
    "password-guide": true,
    "result-guide": true,
  });
  const idRef = useRef();
  const passwordRef = useRef();
  const submitRef = useRef();

  const idFormGuide = "잘못된 형식의 아이디입니다.";
  const pwFormGuide = "잘못된 형식의 비밀번호입니다.";
  const invalidResultGuide = "아이디 혹은 비밀번호를 다시 확인해주십시오.";

  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("hide: ", hide);
    console.log("valid: ", valid);
  }, [hide]);

  const catchEnter = (event) => {
    if (!submitRef) {
      return;
    }
    if (event.key === "Enter" && id && password) {
      //  const event = submitRef.current.submit();
      // 여기서 submit 이 발생한다고 가정
      submitHandler();
    }
  };

  const submitHandler = async () => {
    try {
      //  const result = await fetch();
      const result = "요청 결과";
      // 로그인이 성공한 경우 - 토큰 저장
      if (result) {
        localStorage.setItem("myToken", result);
      } else {
        console.log("[Error]login failed");
      }
    } catch (error) {
      console.log("[Error]login validation: ", error);
    }
    setHide(() => {
      const updatedHide = {
        "id-guide": !valid["id-valid"],
        "password-guide": !valid["password-valid"],
        "result-guide": !valid["result-valid"],
      };
      return updatedHide;
    });
    setId("");
    setPassword("");
  };

  const idInputHandler = (event) => {
    if (!convertRegexExecToBoolean(validEmailForm, event.target.value)) {
      setValid((prev) => {
        return { ...prev, "id-valid": false };
      });
    } else {
      setValid((prev) => {
        return { ...prev, "id-valid": true };
      });
    }
    setId(event.target.value);
  };

  const passwordInputHandler = (event) => {
    if (!convertRegexExecToBoolean(validePasswordForm, event.target.value)) {
      setValid((prev) => {
        return { ...prev, "password-valid": false };
      });
    } else {
      setValid((prev) => {
        return { ...prev, "password-valid": true };
      });
    }
    setPassword(event.target.value);
  };

  return (
    <div
      className={styles["login-container"]}
      style={{
        padding: "16px",
        border: "1px solid grey",
        borderRadius: "16px",
      }}
    >
      <form ref={submitRef} onSubmit={submitHandler}>
        <div className={styles["id-wrapper"]}>
          <input
            ref={idRef}
            type="text"
            onChange={idInputHandler}
            onKeyDown={catchEnter}
            value={id}
            placeholder="아이디를 입력해주세요"
          />
          {hide["id-guide"] ? null : (
            <p className={styles["id-guide"]}>{idFormGuide}</p>
          )}
        </div>
        <div className={styles["password-wrapper"]}>
          <input
            ref={passwordRef}
            type="password"
            onChange={passwordInputHandler}
            onKeyDown={catchEnter}
            value={password}
            placeholder="비밀번호를 입력해주세요"
          />
          {hide["password-guide"] ? null : (
            <p className={styles["password-guide"]}>{pwFormGuide}</p>
          )}
        </div>
        {hide["result-guide"] ? null : (
          <p className={styles["result-guide"]}>{invalidResultGuide}</p>
        )}
      </form>
    </div>
  );
};
