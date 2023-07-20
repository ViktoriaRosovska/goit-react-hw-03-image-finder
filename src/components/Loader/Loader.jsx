import { Watch } from 'react-loader-spinner';

export function Loader() {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#3f51b5"
      ariaLabel="watch-loading"
      wrapperStyle={{ position: 'absolute', top: '50%', left: '50%' }}
      visible={true}
    />
  );
}
