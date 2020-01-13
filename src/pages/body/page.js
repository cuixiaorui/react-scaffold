import { useSelector } from 'dva';
import Head from '@/components/Head/Head';


export default () => {
  const { users } = useSelector(state => ({ users: state.body.users }));
  console.log(users);


  // 也可以通过下面的方式拉取初始化数据
  // const dispatch = useDispatch();
  // useEffect(() => {
  // dispatch(actions.fetchUsers());
  // }, [dispatch, props.match.params.id]);

  return (
    <div data-testid="body">
      <Head></Head>
      {users.toString()}
    </div>
  );
};
