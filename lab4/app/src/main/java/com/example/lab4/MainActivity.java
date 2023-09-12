package com.example.lab4;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Spinner;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private Spinner spinnerColors;
    private TextView textViewDescriptionTempt;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        spinnerColors=findViewById(R.id.spinnerColors);
        textViewDescriptionTempt=findViewById(R.id.textViewDescriptionTemp);
    }

    public void showDescription(View view) {
        int position = spinnerColors.getSelectedItemPosition();
        String descripton =getDescriptionByPosition(position);
        textViewDescriptionTempt.setText(descripton);
    }
    private String getDescriptionByPosition(int position) {
        String[] description = getResources().getStringArray(R.array.description_of_temp);
        return description[position];
    }
}