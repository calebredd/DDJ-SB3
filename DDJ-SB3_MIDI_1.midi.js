<?xml version='1.0' encoding='utf-8'?>
<MixxxControllerPreset mixxxVersion="2.0+" schemaVersion="1">
    <info>
        <name>Pioneer DDJ-SB2</name>
        <author>Michael Stahl, DG3NEC</author>
        <description>Pioneer DDJ-SB2</description>
        <forums>http://mixxx.org/forums/viewtopic.php?f=7&amp;t=7509</forums>
        <wiki>http://mixxx.org/wiki/doku.php/pioneer_ddj-sb2</wiki>
    </info>
    <controller id="DDJ-SB3">
        <scriptfiles>
            <file functionprefix="" filename="midi-components-0.0.js"/>
            <file functionprefix="" filename="lodash.mixxx.js"/>
            <file functionprefix="PioneerDDJSB2" filename="Pioneer-DDJ-SB2-scripts.js"/>
        </scriptfiles>
        <controls>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.loopExitButton</key>
                <description>Manual loop exit Deck 3, Button: PAD3 (in MANUAL-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x22</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.loopExitButton</key>
                <description>Manual loop exit Deck 4, Button: PAD3 (in MANUAL-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x22</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 8 Deck 1, Button: SHIFT &amp; PAD4 (in ROLL-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x5B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 8 Deck 2, Button: SHIFT &amp; PAD4 (in ROLL-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x5B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 8 Deck 3, Button: SHIFT &amp; PAD4 (in ROLL-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x5B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 8 Deck 4, Button: SHIFT &amp; PAD4 (in ROLL-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x5B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.jogRingTickShift</key>
                <description>Jog ring shift Deck 1, SHIFT left JOGDIALSIDE (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x26</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.jogRingTickShift</key>
                <description>Jog ring shift Deck 2, SHIFT right JOGDIALSIDE (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x26</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.loopInButton</key>
                <description>Manual loop in Deck 1, Button: PAD1 (in MANUAL-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x20</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.jogRingTickShift</key>
                <description>Jog ring shift Deck 3, SHIFT left JOGDIALSIDE (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x26</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.loopInButton</key>
                <description>Manual loop in Deck 2, Button: PAD1 (in MANUAL-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x20</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.jogRingTickShift</key>
                <description>Jog ring shift Deck 4, SHIFT right JOGDIALSIDE (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x26</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.loopInButton</key>
                <description>Manual loop in Deck 3, Button: PAD1 (in MANUAL-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x20</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit1]</group>
                <key>PioneerDDJSB2.fxKnobLSB</key>
                <description>FX1 (LSB), Knob: left FX1</description>
                <status>0xB4</status>
                <midino>0x26</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Samplers]</group>
                <key>show_samplers</key>
                <description>Toggle Sampler view, Button: SHIFT &amp; right LOAD (Deck 2 active)</description>
                <status>0x96</status>
                <midino>0x59</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.loopInButton</key>
                <description>Manual loop in Deck 4, Button: PAD1 (in MANUAL-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x20</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>PioneerDDJSB2.fxKnobLSB</key>
                <description>FX2 (LSB), Knob: right FX2</description>
                <status>0xB5</status>
                <midino>0x26</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 2 Deck 1, Button: SHIFT &amp; PAD2 (in ROLL-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x59</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 2 Deck 2, Button: SHIFT &amp; PAD2 (in ROLL-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x59</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 2 Deck 3, Button: SHIFT &amp; PAD2 (in ROLL-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x59</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 2 Deck 4, Button: SHIFT &amp; PAD2 (in ROLL-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x59</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.gainKnobLSB</key>
                <description>Gain Deck 1 (LSB), Knob: left TRIM (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x24</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.gainKnobLSB</key>
                <description>Gain Deck 2 (LSB), Knob: right TRIM (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x24</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.gainKnobLSB</key>
                <description>Gain Deck 3 (LSB), Knob: left TRIM (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x24</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.gainKnobLSB</key>
                <description>Gain Deck 4 (LSB), Knob: right TRIM (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x24</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.jogPlatterTick</key>
                <description>Jog (Vinyl Mode) Deck 1, left JOGDIAL (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x22</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.jogPlatterTick</key>
                <description>Jog (Vinyl Mode) Deck 2, right JOGDIAL (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x22</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.jogPlatterTick</key>
                <description>Jog (Vinyl Mode) Deck 3, left JOGDIAL (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x22</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.jogPlatterTick</key>
                <description>Jog (Vinyl Mode) Deck 4, right JOGDIAL (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x22</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.keyLockButton</key>
                <description>Key lock Deck 1, Button: left KEYLOCK (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x1A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.keyLockButton</key>
                <description>Key lock Deck 2, Button: right KEYLOCK (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x1A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.keyLockButton</key>
                <description>Key lock Deck 3, Button: left KEYLOCK (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x1A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.keyLockButton</key>
                <description>Key lock Deck 4, Button: right KEYLOCK (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x1A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.tempoSliderLSB</key>
                <description>Tempo slider Deck 1 (LSB), Slider: left TEMPO (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x20</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.tempoSliderLSB</key>
                <description>Tempo slider Deck 2 (LSB), Slider: right TEMPO (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x20</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 64 Deck 1, Button: SHIFT &amp; PAD3 (in AUTO-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x1A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.tempoSliderLSB</key>
                <description>Tempo slider Deck 3 (LSB), Slider: left TEMPO (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x20</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 64 Deck 2, Button: SHIFT &amp; PAD3 (in AUTO-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x1A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.tempoSliderLSB</key>
                <description>Tempo slider Deck 4 (LSB), Slider: right TEMPO (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x20</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 64 Deck 3, Button: SHIFT &amp; PAD3 (in AUTO-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x1A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit]</group>
                <key>PioneerDDJSB2.fxKnobShiftedLSB</key>
                <description>Shift FX1 (LSB), Knob: left SHIFT &amp; FX1</description>
                <status>0xB4</status>
                <midino>0x20</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 64 Deck 4, Button: SHIFT &amp; PAD3 (in AUTO-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x1A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.fxKnobShiftedLSB</key>
                <description>Shift FX2 (LSB), Knob: right SHIFT &amp; FX2</description>
                <status>0xB5</status>
                <midino>0x20</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1 Deck 1, Button: PAD4 (in ROLL-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x53</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1 Deck 2, Button: PAD4 (in ROLL-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x53</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1 Deck 3, Button: PAD4 (in ROLL-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x53</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1 Deck 4, Button: PAD4 (in ROLL-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x53</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 16 Deck 1, Button: SHIFT &amp; PAD1 (in AUTO-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x18</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 16 Deck 2, Button: SHIFT &amp; PAD1 (in AUTO-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x18</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 16 Deck 3, Button: SHIFT &amp; PAD1 (in AUTO-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x18</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 16 Deck 4, Button: SHIFT &amp; PAD1 (in AUTO-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x18</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Loop 1/4 Deck 1, Button: PAD2 (in ROLL-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x51</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Loop 1/4 Deck 2, Button: PAD2 (in ROLL-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x51</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Loop 1/4 Deck 3, Button: PAD2 (in ROLL-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x51</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Loop 1/4 Deck 4, Button: PAD2 (in ROLL-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x51</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.filterKnobMSB</key>
                <description>Filter Deck 4 (MSB), Knob: right FILTER (Deck 4 active)</description>
                <status>0xB6</status>
                <midino>0x1A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 4 Deck 1, Button: PAD3 (in AUTO-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x12</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 4 Deck 2, Button: PAD3 (in AUTO-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x12</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 4 Deck 3, Button: PAD3 (in AUTO-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x12</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 4 Deck 4, Button: PAD3 (in AUTO-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x12</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 8 Deck 1, Button: SHIFT &amp; PAD4 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x4B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.filterKnobMSB</key>
                <description>Filter Deck 2 (MSB), Knob: right FILTER (Deck 2 active)</description>
                <status>0xB6</status>
                <midino>0x18</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 8 Deck 2, Button: SHIFT &amp; PAD4 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x4B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 8 Deck 3, Button: SHIFT &amp; PAD4 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x4B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 8 Deck 4, Button: SHIFT &amp; PAD4 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x4B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 1 Deck 1, Button: PAD1 (in AUTO-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x10</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit1]</group>
                <key>PioneerDDJSB2.fxButton</key>
                <description>FX1-3  (Deck2), Button: left FX1-3</description>
                <status>0x94</status>
                <midino>0x49</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 1 Deck 2, Button: PAD1 (in AUTO-LOOP-Mode, Deck 1 active)</description>
                <status>0x98</status>
                <midino>0x10</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>PioneerDDJSB2.fxButton</key>
                <description>FX2-3 (Deck2), Button: right FX2-3</description>
                <status>0x95</status>
                <midino>0x49</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 1 Deck 3, Button: PAD1 (in AUTO-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x10</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.loadButton</key>
                <description>Load selected Deck 4, Button: right LOAD (Deck 4 active)</description>
                <status>0x96</status>
                <midino>0x49</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 1 Deck 4, Button: PAD1 (in AUTO-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x10</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 6 Deck 1, Button: SHIFT &amp; PAD2 (in HOT-CUE-5-8-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x49</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 6 Deck 2, Button: SHIFT &amp; PAD2 (in HOT-CUE-5-8-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x49</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.reverseRollButton</key>
                <description>Reverse play Deck 1, Button: SHIFT left PLAY (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x47</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 6 Deck 3, Button: SHIFT &amp; PAD2 (in HOT-CUE-5-8-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x49</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.reverseRollButton</key>
                <description>Reverse play Deck 2, Button: SHIFT right PLAY (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x47</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 6 Deck 4, Button: SHIFT &amp; PAD2 (in HOT-CUE-5-8-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x49</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.reverseRollButton</key>
                <description>Reverse play Deck 3, Button: SHIFT left PLAY (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x47</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.reverseRollButton</key>
                <description>Reverse play Deck 4, Button: SHIFT right PLAY (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x47</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit1]</group>
                <key>PioneerDDJSB2.fxButton</key>
                <description>FX1-1 (Deck1), Button: left FX1-1</description>
                <status>0x94</status>
                <midino>0x47</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>PioneerDDJSB2.fxButton</key>
                <description>FX2-1 (Deck1), Button: right FX2-1</description>
                <status>0x95</status>
                <midino>0x47</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.cueButton</key>
                <description>Cue Deck 1, Button: left CUE (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x0C</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.loadButton</key>
                <description>Load selected Deck 2, Button: right LOAD (Deck 2 active)</description>
                <status>0x96</status>
                <midino>0x47</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.cueButton</key>
                <description>Cue Deck 2, Button: right CUE (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x0C</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.cueButton</key>
                <description>Cue Deck 3, Button: left CUE (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x0C</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.cueButton</key>
                <description>Cue Deck 4, Button: right CUE (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x0C</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 3 Deck 1, Button: SHIFT &amp; PAD3 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x0A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 3 Deck 2, Button: SHIFT &amp; PAD3 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x0A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 3 Deck 3, Button: SHIFT &amp; PAD3 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x0A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 3 Deck 4, Button: SHIFT &amp; PAD3 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x0A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 8 Deck 1, Button: PAD4 (in HOT-CUE-5-8-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x43</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 8 Deck 2, Button: PAD4 (in HOT-CUE-5-8-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x43</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 8 Deck 3, Button: PAD4 (in HOT-CUE-5-8-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x43</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 8 Deck 4, Button: PAD4 (in HOT-CUE-5-8-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x43</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 1 Deck 1, Button: SHIFT &amp; PAD1 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x08</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 1 Deck 2, Button: SHIFT &amp; PAD1 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x08</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 1 Deck 3, Button: SHIFT &amp; PAD1 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x08</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[PreviewDeck1]</group>
                <key>PioneerDDJSB2.rotarySelectorClick</key>
                <description>Preview of selected song, stop preview if no rotation between next press (Down: Load and start -- Up: Jump to position 30%), Knob: BROWSER</description>
                <status>0x96</status>
                <midino>0x41</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Library]</group>
                <key>MoveFocus</key>
                <description>MIDI Learned from 12 messages.</description>
                <status>0x96</status>
                <midino>0x41</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 1 Deck 4, Button: SHIFT &amp; PAD1 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x08</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 6 Deck 1, Button: PAD2 (in HOT-CUE-5-8-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x41</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 6 Deck 2, Button: PAD2 (in HOT-CUE-5-8-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x41</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel]</group>
                <key>PioneerDDJSB2.shiftButton</key>
                <description>Shift Deck 1, Button: left SHIFT (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x3F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 6 Deck 3, Button: PAD2 (in HOT-CUE-5-8-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x41</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.shiftButton</key>
                <description>Shift Deck 2, Button: right SHIFT (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x3F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 6 Deck 4, Button: PAD2 (in HOT-CUE-5-8-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x41</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>eject</key>
                <description>Eject Sampler3, Button: SHIFT PAD3 (in BANK-Mode, Deck 1)</description>
                <status>0x97</status>
                <midino>0x7A</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.shiftButton</key>
                <description>Shift Deck 3, Button: left SHIFT (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x3F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>eject</key>
                <description>Eject Sampler3, Button: SHIFT PAD3 (in BANK-Mode, Deck 2)</description>
                <status>0x98</status>
                <midino>0x7A</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.shiftButton</key>
                <description>Shift Deck 4, Button: right SHIFT (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x3F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>eject</key>
                <description>Eject Sampler3, Button: SHIFT PAD3 (in BANK-Mode, Deck 3)</description>
                <status>0x99</status>
                <midino>0x7A</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>eject</key>
                <description>Eject Sampler3, Button: SHIFT PAD3 (in BANK-Mode, Deck 4)</description>
                <status>0x9A</status>
                <midino>0x7A</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>eject</key>
                <description>Eject Sampler1, Button: SHIFT PAD1 (in BANK-Mode, Deck 1)</description>
                <status>0x97</status>
                <midino>0x78</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>eject</key>
                <description>Eject Sampler1, Button: SHIFT PAD1 (in BANK-Mode, Deck 2)</description>
                <status>0x98</status>
                <midino>0x78</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>eject</key>
                <description>Eject Sampler1, Button: SHIFT PAD1 (in BANK-Mode, Deck 3)</description>
                <status>0x99</status>
                <midino>0x78</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>eject</key>
                <description>Eject Sampler1, Button: SHIFT PAD1 (in BANK-Mode, Deck 4)</description>
                <status>0x9A</status>
                <midino>0x78</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 3 Deck 1, Button: PAD3 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x02</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 3 Deck 2, Button: PAD3 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x02</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 3 Deck 3, Button: PAD3 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x02</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 3 Deck 4, Button: PAD3 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x02</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>stop</key>
                <description>Sampler 4 stop, Button: SHIFT &amp; PAD4 (in SAMPLER-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x3B</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>stop</key>
                <description>Sampler 4 stop, Button: SHIFT &amp; PAD4 (in SAMPLER-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x3B</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>stop</key>
                <description>Sampler 4 stop, Button: SHIFT &amp; PAD4 (in SAMPLER-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x3B</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>stop</key>
                <description>Sampler 4 stop, Button: SHIFT &amp; PAD4 (in SAMPLER-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x3B</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 1 Deck 1, Button: PAD1 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x00</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 1 Deck 2, Button: PAD1 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x00</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 1 Deck 3, Button: PAD1 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x00</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit1]</group>
                <key>PioneerDDJSB2.fxKnobMSB</key>
                <description>FX1 (MSB), Knob: left FX1</description>
                <status>0xB4</status>
                <midino>0x06</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 1 Deck 4, Button: PAD1 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x00</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>PioneerDDJSB2.fxKnobMSB</key>
                <description>FX2 (MSB), Knob: right FX2</description>
                <status>0xB5</status>
                <midino>0x06</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>stop</key>
                <description>Sampler 2 stop, Button: SHIFT &amp; PAD2 (in SAMPLER-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x39</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>stop</key>
                <description>Sampler 2 stop, Button: SHIFT &amp; PAD2 (in SAMPLER-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x39</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>stop</key>
                <description>Sampler 2 stop, Button: SHIFT &amp; PAD2 (in SAMPLER-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x39</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>stop</key>
                <description>Sampler 2 stop, Button: SHIFT &amp; PAD2 (in SAMPLER-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x39</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.gainKnobMSB</key>
                <description>Gain Deck 1 (MSB), Knob: left TRIM (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x04</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler3, Button: PAD3 (in BANK-Mode, Deck 1)</description>
                <status>0x97</status>
                <midino>0x72</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Master]</group>
                <key>crossfader</key>
                <description>Crossfader (LSB), Slider: FADE</description>
                <status>0xB6</status>
                <midino>0x3F</midino>
                <options>
                    <fourteen-bit-lsb/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.gainKnobMSB</key>
                <description>Gain Deck 2 (MSB), Knob: right TRIM (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x04</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler3, Button: PAD3 (in BANK-Mode, Deck 2)</description>
                <status>0x98</status>
                <midino>0x72</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.gainKnobMSB</key>
                <description>Gain Deck 3 (MSB), Knob: left TRIM (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x04</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler3, Button: PAD3 (in BANK-Mode, Deck 3)</description>
                <status>0x99</status>
                <midino>0x72</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.gainKnobMSB</key>
                <description>Gain Deck 4 (MSB), Knob: right TRIM (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x04</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler3, Button: PAD3 (in BANK-Mode, Deck 4)</description>
                <status>0x9A</status>
                <midino>0x72</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog touch (No Vinyl Mode) Deck 1, left JOGDIAL (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x35</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog touch (No Vinyl Mode) Deck 2, right JOGDIAL (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x35</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler1, Button: PAD1 (in BANK-Mode, Deck 1)</description>
                <status>0x97</status>
                <midino>0x70</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog touch (No Vinyl Mode) Deck 3, left JOGDIAL (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x35</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler1, Button: PAD1 (in BANK-Mode, Deck 2)</description>
                <status>0x98</status>
                <midino>0x70</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog touch (No Vinyl Mode) Deck 4, right JOGDIAL (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x35</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler1, Button: PAD1 (in BANK-Mode, Deck 3)</description>
                <status>0x99</status>
                <midino>0x70</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler1, Button: PAD1 (in BANK-Mode, Deck 4)</description>
                <status>0x9A</status>
                <midino>0x70</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.tempoSliderMSB</key>
                <description>Tempo slider Deck 1 (MSB), Slider: left TEMPO (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x00</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.tempoSliderMSB</key>
                <description>Tempo slider Deck 2 (MSB), Slider: right TEMPO (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x00</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.tempoSliderMSB</key>
                <description>Tempo slider Deck 3 (MSB), Slider: left TEMPO (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x00</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.tempoSliderMSB</key>
                <description>Tempo slider Deck 4 (MSB), Slider: right TEMPO (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x00</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit]</group>
                <key>PioneerDDJSB2.fxKnobShiftedMSB</key>
                <description>Shift FX1 (MSB), Knob: left SHIFT &amp; FX1</description>
                <status>0xB4</status>
                <midino>0x00</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>PioneerDDJSB2.fxKnobShiftedMSB</key>
                <description>Shift FX2 (MSB), Knob: right SHIFT &amp; FX1</description>
                <status>0xB5</status>
                <midino>0x00</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>start_play</key>
                <description>Sampler 4 play, Button: PAD4 (in SAMPLER-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x33</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>start_play</key>
                <description>Sampler 4 play, Button: PAD4 (in SAMPLER-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x33</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>start_play</key>
                <description>Sampler 4 play, Button: PAD4 (in SAMPLER-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x33</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>start_play</key>
                <description>Sampler 4 play, Button: PAD4 (in SAMPLER-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x33</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.filterKnobLSB</key>
                <description>Filter Deck 3 (LSB), Knob: left FILTER (Deck 3 active)</description>
                <status>0xB6</status>
                <midino>0x39</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>start_play</key>
                <description>Sampler 2 play, Button: PAD2 (in SAMPLER-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x31</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>start_play</key>
                <description>Sampler 2 play, Button: PAD2 (in SAMPLER-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x31</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>start_play</key>
                <description>Sampler 2 play, Button: PAD2 (in SAMPLER-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x31</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>start_play</key>
                <description>Sampler 2 play, Button: PAD2 (in SAMPLER-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x31</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.filterKnobLSB</key>
                <description>Filter Deck 1 (LSB), Knob: left FILTER (Deck 1 active)</description>
                <status>0xB6</status>
                <midino>0x37</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.headphoneShiftCueButton</key>
                <description>Toggles headphone cueing Deck 3, Button: SHIFT &amp; left CUE (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x68</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.headphoneShiftCueButton</key>
                <description>Toggles headphone cueing Deck 4, Button: SHIFT &amp; right CUE (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x68</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.headphoneShiftCueButton</key>
                <description>Toggles headphone cueing Deck 1, Button: SHIFT &amp; left CUE (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x68</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.headphoneShiftCueButton</key>
                <description>Toggles headphone cueing Deck 2, Button: SHIFT &amp; right CUE (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x68</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit1]</group>
                <key>prev_chain</key>
                <description>Preview Effekt 1, Button: SHIFT &amp; PAD1 (in CUE LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x68</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>prev_chain</key>
                <description>Preview Effekt 1, Button: SHIFT &amp; PAD1 (in CUE LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x68</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>prev_chain</key>
                <description>Preview Effekt 1, Button: SHIFT &amp; PAD1 (in CUE LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x68</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>prev_chain</key>
                <description>Preview Effekt 1, Button: SHIFT &amp; PAD1 (in CUE LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x68</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.deckFaderLSB</key>
                <description>Channel fader Deck 1 (LSB), Slider: left CHANNELFADER (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x33</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.deckFaderLSB</key>
                <description>Channel fader Deck 2 (LSB), Slider: right CHANNELFADER (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x33</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.deckFaderLSB</key>
                <description>Channel fader Deck 3 (LSB), Slider: left CHANNELFADER (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x33</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.deckFaderLSB</key>
                <description>Channel fader Deck 4 (LSB), Slider: right CHANNELFADER (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x33</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.loopDoubleButton</key>
                <description>Manual loop double Deck 1, Button: SHIFT &amp; PAD4 (in MANUAL-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x2B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit1]</group>
                <key>PioneerDDJSB2.fxButtonShifted</key>
                <description>Shift FX1-2 (Head), Button: left SHIFT &amp; FX1-2</description>
                <status>0x94</status>
                <midino>0x64</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.loopDoubleButton</key>
                <description>Manual loop double Deck 2, Button: SHIFT &amp; PAD4 (in MANUAL-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x2B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>PioneerDDJSB2.fxButtonShifted</key>
                <description>Shift FX2-2 (Head), Button: right SHIFT &amp; FX2-2</description>
                <status>0x95</status>
                <midino>0x64</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.loopDoubleButton</key>
                <description>Manual loop double Deck 3, Button: SHIFT &amp; PAD4 (in MANUAL-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x2B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.loopDoubleButton</key>
                <description>Manual loop double Deck 4, Button: SHIFT &amp; PAD4 (in MANUAL-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x2B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.filterLowKnobLSB</key>
                <description>Low level Deck 1 (LSB), Knob: left LOW (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x2F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.filterLowKnobLSB</key>
                <description>Low level Deck 2 (LSB), Knob: right LOW (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x2F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.loopMoveForwardButton</key>
                <description>Manual loop move forward Deck 1, Button: SHIFT &amp; PAD2 (in MANUAL-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x29</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.filterLowKnobLSB</key>
                <description>Low level Deck 3 (LSB), Knob: left LOW (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x2F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.loopMoveForwardButton</key>
                <description>Manual loop move forward Deck 2, Button: SHIFT &amp; PAD2 (in MANUAL-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x29</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.filterLowKnobLSB</key>
                <description>Low level Deck 4 (LSB), Knob: right LOW (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x2F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.loopMoveForwardButton</key>
                <description>Manual loop move forward Deck 3, Button: SHIFT &amp; PAD2 (in MANUAL-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x29</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.loopMoveForwardButton</key>
                <description>Manual loop move forward Deck 4, Button: SHIFT &amp; PAD2 (in MANUAL-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x29</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.highKillButton</key>
                <description>Low kill Deck 1, Button: PAD3 (in CUE LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x62</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.highKillButton</key>
                <description>Low kill Deck 2, Button: PAD3 (in CUE LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x62</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.shiftKeyLockButton</key>
                <description>Shift KeyLock, Button: left SHIFT &amp; KeyLock(Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x60</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.highKillButton</key>
                <description>Low kill Deck 3, Button: PAD3 (in CUE LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x62</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.shiftKeyLockButton</key>
                <description>Shift KeyLock, Button: right SHIFT &amp; KeyLock(Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x60</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.highKillButton</key>
                <description>Low kill Deck 4, Button: PAD3 (in CUE LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x62</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.shiftKeyLockButton</key>
                <description>Shift KeyLock, Button: left SHIFT &amp; KeyLock(Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x60</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.shiftKeyLockButton</key>
                <description>Shift KeyLock, Button: right SHIFT &amp; KeyLock(Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x60</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1]</group>
                <key>show</key>
                <description>Toggle Effect view, Button: SHIFT &amp; left LOAD (Deck 2 active)</description>
                <status>0x96</status>
                <midino>0x60</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.lowKillButton</key>
                <description>Low kill Deck 1, Button: PAD1 (in CUE LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x60</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.lowKillButton</key>
                <description>Low kill Deck 2, Button: PAD1 (in CUE LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x60</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.lowKillButton</key>
                <description>Low kill Deck 3, Button: PAD1 (in CUE LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x60</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.lowKillButton</key>
                <description>Low kill Deck 4, Button: PAD1 (in CUE LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x60</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.filterMidKnobLSB</key>
                <description>Mid level Deck 1 (LSB), Knob: left MID (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x2B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.filterMidKnobLSB</key>
                <description>Mid level Deck 2 (LSB), Knob: right HI (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x2B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.filterMidKnobLSB</key>
                <description>Mid level Deck 3 (LSB), Knob: left MID (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x2B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.filterMidKnobLSB</key>
                <description>Mid level Deck 4 (LSB), Knob: right MID (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x2B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.quantizeButton</key>
                <description>Quantize Deck 1, Button: left SHIFT SYNC (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x5C</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.quantizeButton</key>
                <description>Quantize Deck 2, Button: right SHIFT SYNC (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x5C</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.quantizeButton</key>
                <description>Quantize Deck 3, Button: left SHIFT SYNC (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x5C</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Playlist]</group>
                <key>PioneerDDJSB2.shiftedRotarySelector</key>
                <description>Shift Browser rotate, Knob: BROWSER</description>
                <status>0xB6</status>
                <midino>0x64</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.quantizeButton</key>
                <description>Quantize Deck 4, Button: right SHIFT SYNC (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x5C</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.loopHalveButton</key>
                <description>Manual loop half Deck 1, Button: PAD4 (in MANUAL-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x23</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.loopHalveButton</key>
                <description>Manual loop half Deck 2, Button: PAD4 (in MANUAL-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x23</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.loopHalveButton</key>
                <description>Manual loop half Deck 3, Button: PAD4 (in MANUAL-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x23</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.loopHalveButton</key>
                <description>Manual loop half Deck 4, Button: PAD4 (in MANUAL-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x23</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.filterHighKnobLSB</key>
                <description>High level Deck 1 (LSB), Knob: left HI (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x27</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.filterHighKnobLSB</key>
                <description>High level Deck 2 (LSB), Knob: right HI (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x27</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.loopOutButton</key>
                <description>Manual loop out Deck 1, Button: PAD2 (in MANUAL-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x21</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.filterHighKnobLSB</key>
                <description>High level Deck 3 (LSB), Knob: left HI (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x27</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.loopOutButton</key>
                <description>Manual loop out Deck 2, Button: PAD2 (in MANUAL-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x21</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.filterHighKnobLSB</key>
                <description>High level Deck 4 (LSB), Knob: right HI (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x27</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.loopOutButton</key>
                <description>Manual loop out Deck 3, Button: PAD2 (in MANUAL-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x21</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.loopOutButton</key>
                <description>Manual loop out Deck 4, Button: PAD2 (in MANUAL-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x21</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 4 Deck 1, Button: SHIFT &amp; PAD3 (in ROLL-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x5A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 4 Deck 2, Button: SHIFT &amp; PAD3 (in ROLL-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x5A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.syncButton</key>
                <description>Sync Deck 1, Button: left SYNC (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x58</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 4 Deck 3, Button: SHIFT &amp; PAD3 (in ROLL-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x5A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.syncButton</key>
                <description>Sync Deck 2, Button: right SYNC (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x58</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 4 Deck 4, Button: SHIFT &amp; PAD3 (in ROLL-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x5A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.syncButton</key>
                <description>Sync Deck 3, Button: left SYNC (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x58</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.syncButton</key>
                <description>Sync Deck 4, Button: right SYNC (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x58</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1]</group>
                <key>show</key>
                <description>Toggle Effect view, Button: SHIFT &amp; left LOAD (Deck 1 active)</description>
                <status>0x96</status>
                <midino>0x58</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1 Deck 1, Button: SHIFT &amp; PAD1 (in ROLL-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x58</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Master]</group>
                <key>headMix</key>
                <description>Head mix (MSB), Knob: HEADPHONES MIX</description>
                <status>0xB6</status>
                <midino>0x25</midino>
                <options>
                    <fourteen-bit-lsb/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1 Deck 2, Button: SHIFT &amp; PAD1 (in ROLL-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x58</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1 Deck 3, Button: SHIFT &amp; PAD1 (in ROLL-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x58</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1 Deck 4, Button: SHIFT &amp; PAD1 (in ROLL-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x58</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.jogPlatterTick</key>
                <description>Jog (no Vinyl Mode) Deck 1, left JOGDIAL (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x23</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.jogPlatterTick</key>
                <description>Jog (no Vinyl Mode) Deck 2, right JOGDIAL (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x23</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.jogPlatterTick</key>
                <description>Jog (no Vinyl Mode) Deck 3, left JOGDIAL (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x23</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.jogPlatterTick</key>
                <description>Jog (no Vinyl Mode) Deck 4, right JOGDIAL (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x23</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.headphoneCueButton</key>
                <description>Toggles headphone cueing Deck 1, Button: left CUE (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x54</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.headphoneCueButton</key>
                <description>Toggles headphone cueing Deck 2, Button: right CUE (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x54</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.jogRingTick</key>
                <description>Jog ring Deck 1, left JOGDIALSIDE (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x21</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.headphoneCueButton</key>
                <description>Toggles headphone cueing Deck 3, Button: left CUE (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x54</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.jogRingTick</key>
                <description>Jog ring Deck 2, right JOGDIALSIDE (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x21</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.headphoneCueButton</key>
                <description>Toggles headphone cueing Deck 4, Button: right CUE (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x54</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.jogRingTick</key>
                <description>Jog ring Deck 3, left JOGDIALSIDE (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x21</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.jogRingTick</key>
                <description>Jog ring Deck 4, right JOGDIALSIDE (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x21</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.jogPlatterTickShift</key>
                <description>Jog fast Deck 1, SHIFT left JOGDIAL (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x1F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.jogPlatterTickShift</key>
                <description>Jog fast Deck 2, SHIFT right JOGDIAL (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x1F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 32 Deck 1, Button: SHIFT &amp; PAD2 (in AUTO-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x19</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.jogPlatterTickShift</key>
                <description>Jog fast Deck 3, SHIFT left JOGDIAL (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x1F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.jogPlatterTickShift</key>
                <description>Jog fast Deck 4, SHIFT right JOGDIAL (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x1F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 32 Deck 2, Button: SHIFT &amp; PAD2 (in AUTO-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x19</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.vinylButton</key>
                <description>Vinyl Deck 1, Button: left VINYL (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x17</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 32 Deck 3, Button: SHIFT &amp; PAD2 (in AUTO-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x19</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.vinylButton</key>
                <description>Vinyl Deck 2, Button: right VINYL (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x17</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 32 Deck 4, Button: SHIFT &amp; PAD2 (in AUTO-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x19</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.vinylButton</key>
                <description>Vinyl Deck 3, Button: left VINYL (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x17</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Master]</group>
                <key>crossfader</key>
                <description>Crossfader (MSB), Slider: FADE</description>
                <status>0xB6</status>
                <midino>0x1F</midino>
                <options>
                    <fourteen-bit-msb/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1/2 Deck 1, Button: PAD3 (in ROLL-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x52</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.vinylButton</key>
                <description>Vinyl Deck 4, Button: right VINYL (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x17</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1/2 Deck 2, Button: PAD3 (in ROLL-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x52</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1/2 Deck 3, Button: PAD3 (in ROLL-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x52</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1/2 Deck 4, Button: PAD3 (in ROLL-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x52</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1/8 Deck 1, Button: PAD1 (in ROLL-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x50</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1/8 Deck 2, Button: PAD1 (in ROLL-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x50</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.slipButton</key>
                <description>Slip Deck 1, Button: SHIFT left VINYL (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x4E</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1/8 Deck 3, Button: PAD1 (in ROLL-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x50</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.slipButton</key>
                <description>Slip Deck 2, Button: SHIFT right VINYL (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x4E</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopRollButtons</key>
                <description>Auto-Roll 1/8 Deck 4, Button: PAD1 (in ROLL-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x50</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.slipButton</key>
                <description>Slip Deck 3, Button: SHIFT left VINYL (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x4E</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.slipButton</key>
                <description>Slip Deck 4, Button: SHIFT right VINYL (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x4E</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 8 Deck 1, Button: PAD4 (in AUTO-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x13</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 8 Deck 2, Button: PAD4 (in AUTO-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x13</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 8 Deck 3, Button: PAD4 (in AUTO-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x13</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 8 Deck 4, Button: PAD4 (in AUTO-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x13</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.filterKnobMSB</key>
                <description>Filter Deck 3 (MSB), Knob: left FILTER (Deck 3 active)</description>
                <status>0xB6</status>
                <midino>0x19</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 2 Deck 1, Button: PAD2 (in AUTO-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x11</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 2 Deck 2, Button: PAD2 (in AUTO-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x11</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 2 Deck 3, Button: PAD2 (in AUTO-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x11</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.beatloopButtons</key>
                <description>Auto-Loop 2 Deck 4, Button: PAD2 (in AUTO-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x11</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.filterKnobMSB</key>
                <description>Filter Deck 1 (MSB), Knob: left FILTER (Deck 1 active)</description>
                <status>0xB6</status>
                <midino>0x17</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 7 Deck 1, Button: SHIFT &amp; PAD3 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x4A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 7 Deck 2, Button: SHIFT &amp; PAD3 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x4A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.brakeButton</key>
                <description>Break Deck 1, Button: left SHIFT CUE (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 7 Deck 3, Button: SHIFT &amp; PAD3 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x4A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.brakeButton</key>
                <description>Break Deck 2, Button: right SHIFT CUE (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 7 Deck 4, Button: SHIFT &amp; PAD3 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x4A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.brakeButton</key>
                <description>Break Deck 3, Button: left SHIFT CUE (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.brakeButton</key>
                <description>Break Deck 4, Button: right SHIFT CUE (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit1]</group>
                <key>PioneerDDJSB2.fxButton</key>
                <description>FX1-2 (Head), Button: left FX1-2</description>
                <status>0x94</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>PioneerDDJSB2.fxButton</key>
                <description>FX2-2 (Head), Button: right FX2-2</description>
                <status>0x95</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.loadButton</key>
                <description>Load selected Deck 3, Button: left LOAD (Deck 1 active)</description>
                <status>0x96</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 5 Deck 1, Button: SHIFT &amp; PAD1 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 5 Deck 2, Button: SHIFT &amp; PAD1 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 5 Deck 3, Button: SHIFT &amp; PAD1 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 5 Deck 4, Button: SHIFT &amp; PAD1 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x48</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.deckFaderMSB</key>
                <description>Channel fader Deck 1 (MSB), Slider: left CHANNELFADER (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x13</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.deckFaderMSB</key>
                <description>Channel fader Deck 2 (MSB), Slider: right CHANNELFADER (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x13</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.deckFaderMSB</key>
                <description>Channel fader Deck 3 (MSB), Slider: left CHANNELFADER (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x13</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.deckFaderMSB</key>
                <description>Channel fader Deck 4 (MSB), Slider: right CHANNELFADER (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x13</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.playButton</key>
                <description>Toggles Play/Pause Deck 1, Button: left PLAY (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.loadButton</key>
                <description>Load selected Deck 1, Button: left LOAD (Deck 1 active)</description>
                <status>0x96</status>
                <midino>0x46</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.playButton</key>
                <description>Toggles Play/Pause Deck 2, Button: right PLAY (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.playButton</key>
                <description>Toggles Play/Pause Deck 3, Button: left PLAY (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.playButton</key>
                <description>Toggles Play/Pause Deck 4, Button: right PLAY (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 4 Deck 1, Button: SHIFT &amp; PAD4 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 4 Deck 2, Button: SHIFT &amp; PAD4 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 4 Deck 3, Button: SHIFT &amp; PAD4 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 4 Deck 4, Button: SHIFT &amp; PAD4 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.filterLowKnobMSB</key>
                <description>Low level Deck 1 (MSB), Knob: left LOW (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x0F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.filterLowKnobMSB</key>
                <description>Low level Deck 2 (MSB), Knob: right LOW (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x0F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 2 Deck 1, Button: SHIFT &amp; PAD2 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x09</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.filterLowKnobMSB</key>
                <description>Low level Deck 3 (MSB), Knob: left LOW (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x0F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 2 Deck 2, Button: SHIFT &amp; PAD2 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x09</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.filterLowKnobMSB</key>
                <description>Low level Deck 4 (MSB), Knob: right LOW (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x0F</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 2 Deck 3, Button: SHIFT &amp; PAD2 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x09</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Playlist]</group>
                <key>PioneerDDJSB2.rotarySelectorShiftedClick</key>
                <description>Open/close selected left List, Knob: SHIFT &amp; BROWSER</description>
                <status>0x96</status>
                <midino>0x42</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.clearHotCueButtons</key>
                <description>Clear Hot-Cue 2 Deck 4, Button: SHIFT &amp; PAD2 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x09</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 7 Deck 1, Button: PAD3 (in HOT-CUE-5-8-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x42</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 7 Deck 2, Button: PAD3 (in HOT-CUE-5-8-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x42</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 7 Deck 3, Button: PAD3 (in HOT-CUE-5-8-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x42</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 7 Deck 4, Button: PAD3 (in HOT-CUE-5-8-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x42</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>eject</key>
                <description>Eject Sampler4, Button: SHIFT &amp; PAD4 (in BANK-Mode, Deck 1)</description>
                <status>0x97</status>
                <midino>0x7B</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>eject</key>
                <description>Eject Sampler4, Button: SHIFT &amp; PAD4 (in BANK-Mode, Deck 2)</description>
                <status>0x98</status>
                <midino>0x7B</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>eject</key>
                <description>Eject Sampler4, Button: SHIFT &amp; PAD4 (in BANK-Mode, Deck 3)</description>
                <status>0x99</status>
                <midino>0x7B</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>eject</key>
                <description>Eject Sampler4, Button: SHIFT &amp; PAD4 (in BANK-Mode, Deck 4)</description>
                <status>0x9A</status>
                <midino>0x7B</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 5 Deck 1, Button: PAD1 (in HOT-CUE-5-8-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x40</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 5 Deck 2, Button: PAD1 (in HOT-CUE-5-8-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x40</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 5 Deck 3, Button: PAD1 (in HOT-CUE-5-8-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x40</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 5 Deck 4, Button: PAD1 (in HOT-CUE-5-8-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x40</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.filterMidKnobMSB</key>
                <description>Mid level Deck 1 (MSB), Knob: left MID (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.filterMidKnobMSB</key>
                <description>Mid level Deck 2 (MSB), Knob: right HI (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>eject</key>
                <description>Eject Sampler2, Button: SHIFT PAD2 (in BANK-Mode, Deck 1)</description>
                <status>0x97</status>
                <midino>0x79</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.filterMidKnobMSB</key>
                <description>Mid level Deck 3 (MSB), Knob: left MID (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>eject</key>
                <description>Eject Sampler2, Button: SHIFT PAD2 (in BANK-Mode, Deck 2)</description>
                <status>0x98</status>
                <midino>0x79</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.filterMidKnobMSB</key>
                <description>Mid level Deck 4 (MSB), Knob: right MID (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x0B</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>eject</key>
                <description>Eject Sampler2, Button: SHIFT PAD2 (in BANK-Mode, Deck 3)</description>
                <status>0x99</status>
                <midino>0x79</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>eject</key>
                <description>Eject Sampler2, Button: SHIFT PAD2 (in BANK-Mode, Deck 4)</description>
                <status>0x9A</status>
                <midino>0x79</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 4 Deck 1, Button: PAD4 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x03</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 4 Deck 2, Button: PAD4 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x03</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 4 Deck 3, Button: PAD4 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x03</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 4 Deck 4, Button: PAD4 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x03</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.filterHighKnobMSB</key>
                <description>High level Deck 1 (MSB), Knob: left HI (Deck 1 active)</description>
                <status>0xB0</status>
                <midino>0x07</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.filterHighKnobMSB</key>
                <description>High level Deck 2 (MSB), Knob: right HI (Deck 2 active)</description>
                <status>0xB1</status>
                <midino>0x07</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 2 Deck 1, Button: PAD2 (in HOT-CUE-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x01</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.filterHighKnobMSB</key>
                <description>High level Deck 3 (MSB), Knob: left HI (Deck 3 active)</description>
                <status>0xB2</status>
                <midino>0x07</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[AutoDJ]</group>
                <key>PioneerDDJSB2.autodjSkipNext</key>
                <description>AutoDJ skip next, Button: SHIFT &amp; DECK3</description>
                <status>0x90</status>
                <midino>0x73</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 2 Deck 2, Button: PAD2 (in HOT-CUE-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x01</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.filterHighKnobMSB</key>
                <description>High level Deck 4 (MSB), Knob: right HI (Deck 4 active)</description>
                <status>0xB3</status>
                <midino>0x07</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[AutoDJ]</group>
                <key>PioneerDDJSB2.autodjToggle</key>
                <description>Toggle AutoDJ On/Off, Button: SHIFT DECK4</description>
                <status>0x91</status>
                <midino>0x73</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 2 Deck 3, Button: PAD2 (in HOT-CUE-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x01</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[AutoDJ]</group>
                <key>PioneerDDJSB2.autodjSkipNext</key>
                <description>AutoDJ skip next, Button: SHIFT DECK3</description>
                <status>0x92</status>
                <midino>0x73</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.hotCueButtons</key>
                <description>Hot-Cue 2 Deck 4, Button: PAD2 (in HOT-CUE-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x01</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[AutoDJ]</group>
                <key>PioneerDDJSB2.autodjToggle</key>
                <description>Toggle AutoDJ On/Off, Button: SHIFT DECK4</description>
                <status>0x93</status>
                <midino>0x73</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>stop</key>
                <description>Sampler 3 stop, Button: SHIFT &amp; PAD3 (in SAMPLER-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x3A</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>stop</key>
                <description>Sampler 3 stop, Button: SHIFT &amp; PAD3 (in SAMPLER-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x3A</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>stop</key>
                <description>Sampler 3 stop, Button: SHIFT &amp; PAD3 (in SAMPLER-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x3A</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>stop</key>
                <description>Sampler 3 stop, Button: SHIFT &amp; PAD3 (in SAMPLER-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x3A</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Playlist]</group>
                <key>PioneerDDJSB2.rotarySelector</key>
                <description>Browser rotate, Knob: BROWSER</description>
                <status>0xB6</status>
                <midino>0x40</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler4, Button: PAD4 (in BANK-Mode, Deck 1)</description>
                <status>0x97</status>
                <midino>0x73</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler4, Button: PAD4 (in BANK-Mode, Deck 2)</description>
                <status>0x98</status>
                <midino>0x73</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler4, Button: PAD4 (in BANK-Mode, Deck 3)</description>
                <status>0x99</status>
                <midino>0x73</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler4]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler4, Button: PAD4 (in BANK-Mode, Deck 4)</description>
                <status>0x9A</status>
                <midino>0x73</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>stop</key>
                <description>Sampler 1 stop, Button: SHIFT &amp; PAD1 (in SAMPLER-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x38</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Master]</group>
                <key>headMix</key>
                <description>Head mix (MSB), Knob: HEADPHONES MIX</description>
                <status>0xB6</status>
                <midino>0x05</midino>
                <options>
                    <fourteen-bit-msb/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>stop</key>
                <description>Sampler 1 stop, Button: SHIFT &amp; PAD1 (in SAMPLER-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x38</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog touch (Vinyl Mode) Deck 1, left JOGDIAL (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x36</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>stop</key>
                <description>Sampler 1 stop, Button: SHIFT &amp; PAD1 (in SAMPLER-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x38</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog touch (Vinyl Mode) Deck 2, right JOGDIAL (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x36</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>stop</key>
                <description>Sampler 1 stop, Button: SHIFT &amp; PAD1 (in SAMPLER-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x38</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog touch (Vinyl Mode) Deck 3, left JOGDIAL (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x36</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler2, Button: PAD2 (in BANK-Mode, Deck 1)</description>
                <status>0x97</status>
                <midino>0x71</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog touch (Vinyl Mode) Deck 4, right JOGDIAL (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x36</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler2, Button: PAD2 (in BANK-Mode, Deck 2)</description>
                <status>0x98</status>
                <midino>0x71</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler2, Button: PAD2 (in BANK-Mode, Deck 3)</description>
                <status>0x99</status>
                <midino>0x71</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler2]</group>
                <key>LoadSelectedTrack</key>
                <description>Load selected track in Sampler2, Button: PAD2 (in BANK-Mode, Deck 4)</description>
                <status>0x9A</status>
                <midino>0x71</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.filterKnobLSB</key>
                <description>Filter Deck 4 (LSB), Knob: right FILTER (Deck 4 active)</description>
                <status>0xB6</status>
                <midino>0x3A</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>start_play</key>
                <description>Sampler 3 play, Button: PAD3 (in SAMPLER-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x32</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>start_play</key>
                <description>Sampler 3 play, Button: PAD3 (in SAMPLER-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x32</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>start_play</key>
                <description>Sampler 3 play, Button: PAD3 (in SAMPLER-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x32</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler3]</group>
                <key>start_play</key>
                <description>Sampler 3 play, Button: PAD3 (in SAMPLER-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x32</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.filterKnobLSB</key>
                <description>Filter Deck 2 (LSB), Knob: right FILTER (Deck 2 active)</description>
                <status>0xB6</status>
                <midino>0x38</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>start_play</key>
                <description>Sampler 1 play, Button: PAD1 (in SAMPLER-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x30</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>start_play</key>
                <description>Sampler 1 play, Button: PAD1 (in SAMPLER-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x30</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>start_play</key>
                <description>Sampler 1 play, Button: PAD1 (in SAMPLER-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x30</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Sampler1]</group>
                <key>start_play</key>
                <description>Sampler 1 play, Button: PAD1 (in SAMPLER-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x30</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit1]</group>
                <key>next_chain</key>
                <description>Next Effekt 1, Button: SHIFT &amp; PAD2 (in CUE LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x69</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>next_chain</key>
                <description>Next Effekt 1, Button: SHIFT &amp; PAD2 (in CUE LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x69</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog shift touch Deck 4, SHIFT right JOGDIAL (Deck 1 active)</description>
                <status>0x90</status>
                <midino>0x67</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>next_chain</key>
                <description>Next Effekt 1, Button: SHIFT &amp; PAD2 (in CUE LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x69</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog shift touch Deck 2, SHIFT right JOGDIAL (Deck 2 active)</description>
                <status>0x91</status>
                <midino>0x67</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>next_chain</key>
                <description>Next Effekt 1, Button: SHIFT &amp; PAD2 (in CUE LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x69</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog shift touch Deck 3, SHIFT left JOGDIAL (Deck 3 active)</description>
                <status>0x92</status>
                <midino>0x67</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.jogTouch</key>
                <description>Jog shift touch Deck 4, SHIFT right JOGDIAL (Deck 4 active)</description>
                <status>0x93</status>
                <midino>0x67</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit1]</group>
                <key>PioneerDDJSB2.fxButtonShifted</key>
                <description>Shift FX1-3  (Deck2), Button: left SHIFT &amp; FX1-3</description>
                <status>0x94</status>
                <midino>0x65</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>PioneerDDJSB2.fxButtonShifted</key>
                <description>Shift FX2-3 (Deck2), Button: right SHIFT &amp; FX2-3</description>
                <status>0x95</status>
                <midino>0x65</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit1]</group>
                <key>PioneerDDJSB2.fxButtonShifted</key>
                <description>Shift FX1-1, Button: left SHIFT &amp; FX1-1</description>
                <status>0x94</status>
                <midino>0x63</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[EffectRack1_EffectUnit2]</group>
                <key>PioneerDDJSB2.fxButtonShifted</key>
                <description>Shift FX2-1 (Deck1), Button: right SHIFT &amp; FX2-1</description>
                <status>0x95</status>
                <midino>0x63</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.muteButton</key>
                <description>Mute Deck 1, Button: PAD4 (in CUE LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x63</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.muteButton</key>
                <description>Mute Deck 2, Button: PAD4 (in CUE LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x63</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.muteButton</key>
                <description>Mute Deck 3, Button: PAD4 (in CUE LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x63</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.muteButton</key>
                <description>Mute Deck 4, Button: PAD4 (in CUE LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x63</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.loopMoveBackButton</key>
                <description>Manual loop move back Deck 1, Button: SHIFT &amp; PAD1 (in MANUAL-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x28</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.loopMoveBackButton</key>
                <description>Manual loop move back Deck 2, Button: SHIFT &amp; PAD1 (in MANUAL-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x28</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.loopMoveBackButton</key>
                <description>Manual loop move back Deck 3, Button: SHIFT &amp; PAD1 (in MANUAL-LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x28</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Samplers]</group>
                <key>show_samplers</key>
                <description>Toggle Sampler view, Button: SHIFT &amp; right LOAD (Deck 4 active)</description>
                <status>0x96</status>
                <midino>0x61</midino>
                <options>
                    <normal/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.loopMoveBackButton</key>
                <description>Manual loop move back Deck 4, Button: SHIFT &amp; PAD1 (in MANUAL-LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x28</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.midKillButton</key>
                <description>Mid kill Deck 1, Button: PAD2 (in CUE LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x61</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.highKillButton</key>
                <description>Mid kill Deck 2, Button: PAD2 (in CUE LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x61</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel3]</group>
                <key>PioneerDDJSB2.highKillButton</key>
                <description>Mid kill Deck 3, Button: PAD2 (in CUE LOOP-Mode, Deck 3 active)</description>
                <status>0x99</status>
                <midino>0x61</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel4]</group>
                <key>PioneerDDJSB2.highKillButton</key>
                <description>Mid kill Deck 4, Button: PAD2 (in CUE LOOP-Mode, Deck 4 active)</description>
                <status>0x9A</status>
                <midino>0x61</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel1]</group>
                <key>PioneerDDJSB2.loopExitButton</key>
                <description>Manual loop exit Deck 1, Button: PAD3 (in MANUAL-LOOP-Mode, Deck 1 active)</description>
                <status>0x97</status>
                <midino>0x22</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
            <control>
                <group>[Channel2]</group>
                <key>PioneerDDJSB2.loopExitButton</key>
                <description>Manual loop exit Deck 2, Button: PAD3 (in MANUAL-LOOP-Mode, Deck 2 active)</description>
                <status>0x98</status>
                <midino>0x22</midino>
                <options>
                    <script-binding/>
                </options>
            </control>
        </controls>
        <outputs/>
    </controller>
</MixxxControllerPreset>
