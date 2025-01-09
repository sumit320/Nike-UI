const Navigation = () => {
   function sayHello() {
    alert('You logged in!');
  }

  return (
    <nav className="container">
      <div className="logo">
       <a href="onclick"><img src="/images/brand_logo.png" alt="logo" /></a>
      </div>
      <ul>
      <a href="onclick"> <li href="#">Menu</li></a> 
      <a href="onclick"> <li href="#">Location</li></a>
      <a href="onclick"> <li href="#">About</li></a>
      <a href="onclick"> <li href="#">Contact</li></a>
      </ul>

      <button onClick={sayHello}>login</button>
    </nav> 
  );
};

export default Navigation;