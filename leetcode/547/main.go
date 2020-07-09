import "fmt"
package main

func findCircleNum(M [][]int) int{
	N := len(M)
	fmt.Prinf("%d", N)
	res := N // 最多有多少个朋友圈
	friend := make([]int, res) // res是长度

	union := func(s, d int) {
		for i:= range friend {
			// 同化
			if friend[i] == s {
				friend[i] = d;
			}
		}
	}
	for i := 0; i < res; i++ {
		friend[i] = i;
	}
	for i:=0; i < N; i++ {
		for j:= i + 1; j < N; j++ {
			if M[i][j] == 1 {
				if friend[i] != friend[j]{
					res--
					union(friend[i], friend[j])
				}
				
			}
		}
	}
	return res
}
func main() {
	count := findCircleNum([][] int{
		{ 1, 1, 0 },
		{ 1, 1, 0 },
		{ 0, 0, 1}
	})
	fmt.Prinf("朋友圈的数量是%d", count)
}