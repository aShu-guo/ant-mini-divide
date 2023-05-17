// 部门选择组件
Component({
  mixins: [],
  data: {
    visible: false,
    deptList: [],
  },
  props: {
    maskClassName: '',
    zIndex: 998,
    destroyOnClose: false,
  },
  didMount() {
    this.initDeptList();
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    initDeptList() {
      const deptList = [
        { name: '杭州', value: 1 },
        { name: '余杭区', value: 2 },
        { name: '余杭区2', value: 3 },
        { name: '余杭区3', value: 4 },
        { name: '余杭区4', value: 5 },
        { name: '余杭区5', value: 6 },
      ]
      this.setData({ deptList });
    },
    trigger() {
      this.setData({ visible: !this.data.visible });
    },
  },
});
