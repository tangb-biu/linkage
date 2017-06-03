import Mock from 'mockjs'


import patient from './patient'

function addToMock(list) {
	list.forEach(n => {
		Mock.mock(n.path, n.data);
	})
}

addToMock(patient);

export default Mock

