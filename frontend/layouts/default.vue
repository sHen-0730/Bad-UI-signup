<template>
<div style="background-color: #06C38B; height: 100vh;">
<Container class="pt-5">
<Row justify-content="evenly">
<Col class="mt-5" col="6">
<img src="@/assets/logo.jpg" class="img-thumbnail" >
</Col>
<Col class="mt-5" col="6">
<slot />
</col>
</Row>
</Container>
</div>
</template>
