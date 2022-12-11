<template>
  <div>

    <el-button @click="dialogVisible = true"  type="primary" size="large">添加影厅</el-button>


    <el-dialog title="添加影厅"  v-model="dialogVisible"
               width="30%"  :before-close="handleClose">
        <span>
          <div>
            <el-form ref="ruleAdd" :model="hall" label-width="120px"
                     class="demo-rule" status-icon>
                <el-form-item label="影厅名称" prop="name">
                   <el-input v-model="hall.hallName" placeholder="影厅名称"/>
                </el-form-item>
                 <el-form-item label="座位行">
                  <el-input placeholder="行数" v-model="hall.seatRow">
                      <template #append>行</template>
                 </el-input>
                </el-form-item>
                <el-form-item label="座位列" >
                  <el-input placeholder="列数" v-model="hall.seatCol">
                      <template #append>列</template>
                 </el-input>
                </el-form-item>
                <el-form-item label="座位总数" >
                  <el-input placeholder="" v-model="hall.seatNum">
                 </el-input>
                </el-form-item>
                <el-form-item label="座位">
                    <el-select v-model="hall.hallStatus" placeholder="请选择">
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
      <el-table-column prop="hallName"   label="影厅名称" width="180"></el-table-column>
      <el-table-column prop="seatRow" label="座位行" width="180"></el-table-column>
      <el-table-column prop="seatCol" label="座位列" width="180"></el-table-column>
      <el-table-column prop="seatNum" label="座位总数" width="180"></el-table-column>
      <el-table-column prop="hallStatus" label="状态" width="180"></el-table-column>
      <el-table-column fixed="right" label="操作" width="350">
        <template #default>
          <el-button type="primary" size="small" @click="deleteClick">删除</el-button>
          <el-button type="primary" size="small" @click="editClick">修改</el-button>
          <el-button type="primary" size="small" @click="updateClick">修改状态</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "HallCom",
  data(){
    return{
      dialogVisible: false,
      tableData:{
        hallName: '',
        seatRow: '',
        seatCol: '',
        seatNum: '',
        hallStatus: '',
      },
      hall:{
        hallName: '',
        seatRow: '',
        seatCol: '',
        seatNum: '',
        hallStatus: '',
      },
      options: [{
        value: '1',
        label: '使用'
      }, {
        value: '2',
        label: '维护'
      }],
      value: '使用'
    }
  },

  methods:{
    handleClose(done){
      this.$confirm("确认关闭？")
          .then(()=>{
            done;
          })
          .catch(() =>{});
    }
  }
}
</script>

<style scoped>

</style>