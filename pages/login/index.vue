<template>
	<div>
	<nuxt-link to="/"><v-img src="img/logo_center.png"></v-img></nuxt-link>

    <div style="background: #fff; border: 1px solid #ccc; border-radius: 5px; padding: 10px; min-width: 350px;">
	
		<v-form v-model="valid">
			<v-container>
				<p style="text-align: center; margin-bottom: 10px;"><b>{{ $t('login.enter') }}</b></p>

				<div class="input-group mb-3">
					<v-text-field v-model="userInfo.email" label="Email" type="email" append-icon="mdi-mail" counter=64
						outlined :rules="[required('Email'), minLength('Email', 5), maxLength('Email', 64)]" />
				</div>

				<div class="input-group mb-3">
					<v-text-field @keyup.enter="submitForm(userInfo)" v-model="userInfo.password" label="Пароль" :type="showPassword ? 'text' : 'password'"
						:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"
						counter=16 outlined 
						:rules="[required('Пароль'), minLength('Пароль', 3), maxLength('Пароль', 16)]" />
				</div>

				<div class="col-12" style="padding: 0px;">
					<v-btn block @click.prevent="submitForm(userInfo)" :disabled="!valid">Войти</v-btn>
				</div>

				<div class="col-12" style="text-align: center;">
					<nuxt-link to="/register" style="text-decoration: none;">Регистрация</nuxt-link>
				</div>

				<div class="col-12" style="text-align: center; padding: 0px; padding-buttom: 0px;">
					<nuxt-link to="/forgot" style="text-decoration: none;">Забыл пароль</nuxt-link>
				</div>

				<div v-if="message" class="row" style="text-align: center;">
					<div class='col-12'><span :style="messageStyle">{{ message }}</span></div>
				</div>

			</v-container>

		</v-form>
	</div>
	</div>
</template>

<script setup>
    const strategy = 'local'
    let valid = ref(false)
    let error = 0
    let message = ref('')
    const messageStyle = "#333"
    let showPassword = ref(false)

    let userInfo = reactive({
        email: '2903015@gmail.com',
        password: ''
	})

    definePageMeta({
        layout: "login",
    })

    const required = (propertyType) => {
	    return v => v && v.length > 0 || `Нужно указать ${propertyType}`
	}
    const minLength = (propertyType, minLength) => {
        return v => v && v.length >= minLength || `${propertyType} должно быть минимум ${minLength} символов!`
    }
	const maxLength = (propertyType, maxLength) => {
		return v => v && v.length <= maxLength || `${propertyType} должно быть меньше ${maxLength} символов!`
	}

</script>

<style lang="scss" scoped>
.error--text {
	color: red;
}
</style>