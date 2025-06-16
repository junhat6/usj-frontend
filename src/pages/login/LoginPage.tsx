import { useState } from "react";
import styles from "./login.module.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ログイン情報:", { email, password });
    // ここでAPIにリクエストを送る処理を入れる
  };

  return (
    <div className={styles.container}>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          メールアドレス:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          パスワード:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};
