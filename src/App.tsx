import { FC, useState } from 'react';
import styles from '@/App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { About } from '@/pages/about';

// TREE SHAKING DEMONSTRATION
function TODO(a: number) {
  console.log('TODOFUNCTION', a);
}

export const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  // TODO('biba');
  //
  // if (__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOPPLATFORM</div>;
  // }
  //
  // if (__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>;
  // }

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <Link to={'/about'}>about</Link>
      <br />
      
      <Link to={'/shop'}>shop</Link>
      {count}
      <button className={styles.button} onClick={() => setCount(count => count += 1)}>+</button>
      <button onClick={() => setCount(count => count -= 1)}>-</button>
      <Outlet />
      <About />
    </div>
  );
};