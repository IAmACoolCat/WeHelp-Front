/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: WeHelp.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  console.log("access: " + currentUser?.access);
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    canVolunteer: currentUser && currentUser.access === 'volunteer',
    canResident: currentUser && currentUser.access === 'resident',
    canTaskList: currentUser && (currentUser.access === 'admin' || currentUser.access === 'volunteer'),
    canNotSee: currentUser,
  };
}
