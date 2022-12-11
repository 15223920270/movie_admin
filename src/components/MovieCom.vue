<template>
  <el-main>
    <div>

      <el-button @click="dialogVisible = true"  type="primary" size="large">添加电影</el-button>


      <el-dialog title="新增电影"  v-model="dialogVisible"
                 width="30%"  :before-close="handleClose">
        <span>
          <div>
            <el-form ref="ruleAdd" :model="movie"  :rules="rules" label-width="120px"
            class="demo-rule" status-icon>
                <el-form-item label="电影名称" prop="name">
                   <el-input v-model="movie.movieName" placeholder="电影名"/>
                </el-form-item>
                <el-form-item label="上映时间" prop="time">
                  <el-date-picker
                      v-model="movie.movieTime"
                      type="datetime"
                      placeholder="选择日期">
                   </el-date-picker>
                </el-form-item>
                <el-form-item label="电影时长" prop="duration">
                  <el-input placeholder="请输入时长" v-model="movie.movieDuration">
                      <template #append>小时</template>
                 </el-input>
                </el-form-item>
                <el-form-item label="电影状态">
                    <el-select v-model="movie.movieStatus" placeholder="请选择">
                      <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
          </div>
        </span>
        <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="addMovies">新增</el-button>
        <el-button  @click="dialogVisible = false">
         取消
        </el-button>
      </span>
        </template>
      </el-dialog>



      <el-table :data="tableData" border style="width:100%">
        <el-table-column prop="movieNo"   label="电影编号" width="180"></el-table-column>
        <el-table-column prop="movieName" label="电影名称" width="180"></el-table-column>
        <el-table-column prop="movieTime" label="上映时间" width="180"></el-table-column>
        <el-table-column prop="movieDuration" label="电影时长" width="180"></el-table-column>
        <el-table-column prop="movieStatus" label="状态" width="180"></el-table-column>
        <el-table-column fixed="right" label="操作" width="350">
          <template #default>
            <el-button type="primary" size="small" @click="deleteClick">删除</el-button>
            <el-button type="primary" size="small" @click="editClick">修改</el-button>
            <el-button type="primary" size="small" @click="updateClick">修改状态</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


  </el-main>
</template>

<script>


export default {
  name: "MovieCom",
  data(){
    return{
      dialogVisible: false,
      tableData:[{
        movieNo: '',
        movieName: '',
        movieTime: '',
        movieDuration: '',
        movieStatus: ''
      }],
      movie:{
        movieNo:'',
        movieName: '',
        movieTime: '',
        movieDuration: '',
        movieStatus: ''
      },
      options: [{
        value: '1',
        label: '即将上映'
      }, {
        value: '2',
        label: '上映'
      }, {
        value: '3',
        label: '下架'
      }],
      value: '即将上映'
    }
  },
  methods:{
    deleteClick(row){
      console.log(row)
    },
    editClick(row){
      console.log(row)
    },
    updateClick(row){
      console.log(row)
    },
    handleClose(done){
      this.$confirm("确认关闭？")
          .then(()=>{
            done;
          })
          .catch(() =>{});
    },
    addMovies(){
        this.movie.movieNo="11112";
        this.movie.movieTime = format(this.movie.movieTime)
        var status ;
        if (this.movie.movieStatus === '1'){
          status = "即将上映";
        }else if (this.movie.movieStatus === '2'){
          status = "上映";
        }else if (this.movie.movieStatus === '3'){
          // eslint-disable-next-line no-unused-vars
          status = "下架";
        }
        this.movie.movieStatus = status;

        this.tableData.push(this.movie);
        this.dialogVisible = false;
    },
  },
  //创建时间
  created() {
      this.tableData.shift();
      const movies = {movieNo:'7004562', movieName:'龙猫',movieTime:"2019-01-10 15:35:25",
      movieDuration:100,movieStatus:'即将上映'};
      console.log(this.tableData)
      this.tableData.push(movies);
  }
}

//格式化时间
function format(dat){
  //获取年月日，时间
  var year = dat.getFullYear();
  var mon = (dat.getMonth()+1) < 10 ? "0"+(dat.getMonth()+1) : dat.getMonth()+1;
  var data = dat.getDate()  < 10 ? "0"+(dat.getDate()) : dat.getDate();
  var hour = dat.getHours()  < 10 ? "0"+(dat.getHours()) : dat.getHours();
  var min =  dat.getMinutes()  < 10 ? "0"+(dat.getMinutes()) : dat.getMinutes();
  var seon = dat.getSeconds() < 10 ? "0"+(dat.getSeconds()) : dat.getSeconds();

  var newDate = year +"-"+ mon +"-"+ data +" "+ hour +":"+ min +":"+ seon;
  return newDate;
}
</script>

<style scoped>

</style>