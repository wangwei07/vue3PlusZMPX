<template>
  <el-dialog :title="title" v-model="open" width="25%" draggable>
    <el-form :model="form" ref="formRef" :rules="rules" label-width="22%">
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="form.roleName" placeholder="请输入角色名称" />
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch
          v-model="form.status"
          active-value="0"
          inactive-value="1"
        ></el-switch>
      </el-form-item>

      <el-form-item label="角色描述" prop="remark">
        <el-input
          type="textarea"
          v-model="form.remark"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>

      <el-form-item label="菜单权限">
        <el-tree
          class="tree-border"
          :data="menuOptions"
          show-checkbox
          ref="menuRef"
          node-key="id"
          empty-text="加载中，请稍候"
          :props="{ label: 'label', children: 'children' }"
        ></el-tree>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" @click="submitForm">确定</el-button>
      <el-button @click="cancel">取消</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import type { IMenuTreeSelect } from 'types/system/menu'
import type { IRoleInfo } from '@/types/system/role'
import useUser from '@/store/modules/system/role'
import { getRole, updateRole, addRole } from '@/api/system/role'
import {
  roleMenuTreeselect,
  treeselect as menuTreeselect
} from '@/api/system/menu'

// 组件全局数据
const emits = defineEmits(['getList'])
const { proxy } = getCurrentInstance() as any

const menuRef = ref()
const { title, open, addFlag, updateFlag, currentRowInfo } = storeToRefs(
  useUser()
)

// 表单校验规则
const rules = {
  roleName: [{ required: true, message: '角色名称不能为空', trigger: 'blur' }]
}

// 这里必须初始化form,否则为undefined
const formRef = ref()
let form = $ref<IRoleInfo>()
const formInit = { ...form }

// 清空 form表单
function reset() {
  form = JSON.parse(JSON.stringify(formInit))
}

// 新增
function handleAdd() {
  getMenuTreeselect()
  open.value = true
  reset()
  title.value = '新增角色'
  // 加个超时调用定时器，打开后获取dom
  setTimeout(() => {
    formRef.value.clearValidate()
    form.status = '0'
    form.roleSort = 1
    form.roleKey = '122222'
  }, 30)
}

// 修改
function handleUpdate() {
  open.value = true
  reset()
  title.value = '编辑角色'
  const { roleId } = currentRowInfo.value
  const roleMenu = getRoleMenuTreeselect(roleId)
  getRole(roleId).then((response) => {
    if (!response.data) return
    // 因为这里数据类型返回较多，IRoleInfo是其一，这里需要用到的就是IRoleInfo，所以断言一下。
    form = response.data as IRoleInfo
    nextTick(() => {
      roleMenu.then((res) => {
        const { checkedKeys } = res
        if (!checkedKeys) return
        checkedKeys.forEach((v) => {
          nextTick(() => {
            menuRef.value.setChecked(v, true, false)
          })
        })
      })
    })
  })
}

// 表单数据提交
function submitForm() {
  formRef.value.validate((valid: boolean) => {
    if (valid) {
      form.menuIds = getMenuAllCheckedKeys()
      if (form.roleId) {
        updateRole(form).then(() => {
          proxy.$modal.msgSuccess('修改成功')
          open.value = false
          emits('getList')
        })
      } else {
        addRole(form).then(() => {
          proxy.$modal.msgSuccess('新增成功')
          open.value = false
          emits('getList')
        })
      }
    }
  })
}

// 关闭弹窗
function cancel() {
  open.value = false
  reset()
}

watch(addFlag, () => {
  handleAdd()
})
watch(updateFlag, () => {
  handleUpdate()
})

/** 查询菜单树结构 */
const menuOptions = ref<IMenuTreeSelect[]>([])
function getMenuTreeselect() {
  menuTreeselect().then((response) => {
    if (!response.data) return
    menuOptions.value = response.data
  })
}
/** 根据角色ID查询菜单树结构 */
function getRoleMenuTreeselect(roleId: number) {
  return roleMenuTreeselect(roleId).then((response) => {
    if (response.menus) {
      menuOptions.value = response.menus
    }
    return response
  })
}

/** 所有菜单节点数据 */
function getMenuAllCheckedKeys() {
  // 目前被选中的菜单节点
  const checkedKeys = menuRef.value.getCheckedKeys()

  // 半选中的菜单节点
  const halfCheckedKeys = menuRef.value.getHalfCheckedKeys()

  // eslint-disable-next-line prefer-spread
  checkedKeys.unshift.apply(checkedKeys, halfCheckedKeys)

  return checkedKeys
}
</script>

<style lang="scss"></style>
