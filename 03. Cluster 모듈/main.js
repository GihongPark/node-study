/**
 * Cluster 모듈 : 병렬처리를 위해 제공되는 모듈
 *  cpu 코어의 개수 만큰 worker를 발생시켜 병렬처리한다. (쓰래드랑 다른 개념)
 */

 var cluster = require("cluster");

 // Round Robin 방식으로 스케줄링
 cluster.schedulingPolicy = cluster.SCHED_RR;

 // master 코어인지 worker 코어인지 검사
 // cpu 코어 갯수만큼 cluster 하나당 하나의 코어에 할당
 // 갯수보다 많아졌을 경우 master cluster, worker cluster로 나뉘어짐
 // master cluster의 경우 병렬처리
 // worker cluster의 경우 시분할 방식으로 처리
 if(cluster.isMaster == true) {
    cluster.fork(); // 하나의 worker 발생
    cluster.fork();
    cluster.fork();

    // 이벤트 처리
    cluster.on('online', function(worker){
		for(var i = 0 ; i < 10 ; i++){
			console.log(worker.process.pid, "동작");
		}
	});

 }