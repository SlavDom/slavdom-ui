import * as React from "react";
import {Field, Form} from "formik";
import FormView from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import Button from "reactstrap/lib/Button";

const LoginForm = () => (
    <FormView tag={Form}>
        <FormGroup>
            <Label htmlFor="login">Login</Label>
            <Input tag={Field} id="login" name="login" placeholder="Type login..." type="text" />
        </FormGroup>

        <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input tag={Field} id="password" name="password" type="password" />
        </FormGroup>

        <FormGroup>
            <Label htmlFor="cPassword">Confirm password</Label>
            <Input tag={Field} id="cPassword" name="cPassword" type="password" />
        </FormGroup>

        <Button outline color="primary" type="submit" style={{ display: 'block' }}>
            Login
        </Button>
    </FormView>
);

export default LoginForm;
