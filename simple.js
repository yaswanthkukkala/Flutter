import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  home: MyForm(),
  debugShowCheckedModeBanner: false,
));

class MyForm extends StatefulWidget {
  @override
  _MyFormState createState() => _MyFormState();
}

class _MyFormState extends State<MyForm> {
  final _formKey = GlobalKey<FormState>();
  final _name = TextEditingController();
  final _email = TextEditingController();
  final _password = TextEditingController();

  InputDecoration fieldStyle(String label, IconData icon) => InputDecoration(
    labelText: label,
    prefixIcon: Icon(icon, color: Colors.deepPurple[900]),
    filled: true,
    fillColor: Colors.deepOrange[50],
    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.amber[50],
      appBar: AppBar(
        title: Text('Form'),
        backgroundColor: Colors.deepPurple[900],
      ),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                controller: _name,
                decoration: fieldStyle('Name', Icons.person),
                validator: (v) => v!.isEmpty ? 'Enter your name' : null,
              ),
              SizedBox(height: 16),
              TextFormField(
                controller: _email,
                decoration: fieldStyle('Email', Icons.email),
                validator: (v) =>
                    v!.contains('@') ? null : 'Enter valid email',
              ),
              SizedBox(height: 16),
              TextFormField(
                controller: _password,
                obscureText: true,
                decoration: fieldStyle('Password', Icons.lock),
                validator: (v) =>
                    v!.length < 6 ? 'Password must be 6+ chars' : null,
              ),
              SizedBox(height: 24),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepPurple[900],
                  minimumSize: Size(double.infinity, 50),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12)),
                ),
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text('Form submitted successfully!'),
                        backgroundColor: Colors.green,
                      ),
                    );
                  }
                },
                child: Text('Submit',
                    style: TextStyle(fontSize: 18, color: Colors.white))
,
              ),
            ],
          ),
        ),
      ),
    );
  }
      }
