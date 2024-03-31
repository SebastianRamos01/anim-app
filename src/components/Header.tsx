import Nav from "./Nav"

export default function Header() {
  return (
    <header className="head">
        <div className="logo-box">
            <img src="/images/logo.svg" alt=""/>
        </div>
        <Nav></Nav>
    </header>
  )
}
