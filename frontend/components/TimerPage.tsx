import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {StyleSheet, ScrollView} from 'react-native';

import {NavigationFunctionComponent} from 'react-native-navigation';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {TimerPageProps} from '../types/TimerPage';
import {containerStyles, textStyles} from '../styles/TimerPage';

import {colors} from '../utils/colors';
import {getConvertedTimer} from '../utils/utils';

import CustomText from '../utils/components/CustomText';
import ButtonTimer from '../utils/components/ButtonTimer';
import {CustomButton} from '../utils/components/Button';
import LogoTopBar from '../utils/components/LogoTopBar';

import {ExternalSensor} from '../utils/requests/externalSensors';
import {CheckList, CheckListType} from '../utils/requests/checklist';

import {topBarStyles} from '../styles/App';
import {buttonStyles} from '../styles/UserInfoPage';

const getFormattedDate = () => {
  const originalDate = new Date();

  const formattedDate =
    originalDate.getFullYear() +
    '-' +
    (originalDate.getMonth() + 1) +
    '-' +
    originalDate.getDate() +
    '-' +
    originalDate.getHours() +
    '-' +
    originalDate.getMinutes() +
    '-' +
    originalDate.getSeconds();

  return formattedDate;
};

const TimerPage: NavigationFunctionComponent<TimerPageProps> = _props => {
  // initial | running  | done
  const [counterDec, setCounterDec] = React.useState(0);
  const [state, setState] = React.useState<'initial' | 'running' | 'done'>(
    'initial',
  );
  const [checkList, setCheckList] = React.useState<CheckListType | undefined>(
    undefined,
  );
  React.useEffect(() => {
    (async () => {
      const response = await CheckList.getCheckList();
      setCheckList(response);
    })();
  }, []);

  const [checkListDone, setCheckListDone] = React.useState<CheckListType>({
    Antes: {
      Verificacion: [],
      Inicio: [],
      Desplazamiento: [],
      Cambio: [],
      Giros: [],
    },
    Durante: {
      Inicio: [],
      Desplazamiento: [],
      Cambio: [],
      Giros: [],
    },
    Despues: {
      Verificacion: [],
      Inicio: [],
      Desplazamiento: [],
      Cambio: [],
      Giros: [],
    },
  });

  const verifyCheckListDone = (key1, key2, item) => {
    return checkListDone[key1][key2].includes(item);
  };

  const addCheckListDone = (key1, key2, item) => {
    let newCheckListDone = {
      ...checkListDone,
    };
    newCheckListDone[key1][key2].push(item);

    setCheckListDone(newCheckListDone);
  };

  const removeCheckListDone = (key1, key2, item) => {
    let newCheckListDone = {
      ...checkListDone,
    };
    newCheckListDone[key1][key2] = newCheckListDone[key1][key2].filter(
      i => i !== item,
    );

    setCheckListDone(newCheckListDone);
  };

  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (state === 'running') {
      setTimeout(() => {
        setCounterDec(counterDec + 1);
      }, 1000);
    }
  }, [counterDec, state]);

  const startTime = React.useRef<undefined | Date>(undefined);

  const actualDate =
    startTime.current === undefined
      ? undefined
      : Math.ceil(
          Math.abs(new Date().getTime() - startTime.current.getTime()) / 1000,
        );

  const callbackStop = async () => {
    const randomString = Math.random().toString(36).substring(2, 15);
    if (state === 'initial') {
      setState('running');
      startTime.current = new Date();

      try {
        await ExternalSensor.publish({
          codigoEquipo: 2123,
          token: randomString,
          action: 'grabar',
          fechaHora: getFormattedDate().toString(),
          correlativo: 'no se que viene',
          entidad: {
            codigo: 2132,
            nombre: 'Turin',
          },
          postulante: {
            tipoDoc: 3,
            nroDoc: '07899681',
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
    if (state === 'running') {
      setState('done');

      try {
        await ExternalSensor.publish({
          codigoEquipo: 2123,
          token: randomString,
          action: 'detener',
          fechaHora: new Date().toString(),
          correlativo: 'no se que viene',
          entidad: {
            codigo: 2132,
            nombre: 'Turin',
          },
          postulante: {
            tipoDoc: 3,
            nroDoc: '07899681',
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (state === 'initial') {
    return (
      <View
        style={
          state === 'initial'
            ? containerStyles.initialRoot
            : containerStyles.afterRoot
        }>
        <View style={containerStyles.containerTopBar}>
          {actualDate !== undefined ? (
            <>
              <TouchableOpacity style={{flex: 1}} onPress={callbackStop}>
                <CustomText
                  style={{
                    ...topBarStyles.textAfterLogo,
                    flex: undefined,
                    fontSize: 20,
                    textAlign: 'center',
                    marginRight: 0,
                    color: colors.white,
                  }}
                  typography="Lato-Regular">
                  Cancelar
                </CustomText>
              </TouchableOpacity>
              <View style={topBarStyles.divider} />
              <CustomText
                style={{
                  ...topBarStyles.textAfterLogo,
                  fontSize: 20,
                  textAlign: 'center',
                  flex: 1,
                  marginRight: 0,
                }}
                typography="Lato-Regular">
                {getConvertedTimer(actualDate)}
              </CustomText>
            </>
          ) : (
            <CustomText
              style={{
                ...topBarStyles.textAfterLogo,
                textAlign: 'center',
                flex: 1,
                fontSize: 20,
              }}
              typography="Lato-Regular">
              Temporizador
            </CustomText>
          )}
        </View>

        {actualDate === undefined ? (
          <>
            <View style={containerStyles.timerContainer}>
              <CustomText style={textStyles.timerText} typography="Lato-Italic">
                {actualDate !== undefined
                  ? getConvertedTimer(actualDate)
                  : '00:00:00'}
              </CustomText>
            </View>
            <View
              style={{
                backgroundColor:
                  state === 'initial' ? colors.red : colors.secondary,
                flex: 0.05,
              }}
            />
            <View style={containerStyles.buttonContainer}>
              <ButtonTimer
                action={callbackStop}
                title={state === 'initial' ? 'COMENZAR' : 'DETENER'}
              />
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                setIsShownPicker(!isShownPicker);
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
              }}>
              <CustomText
                typography="Lato-Regular"
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  color: colors.white,
                  marginBottom: 40,
                }}>
                Formulario
              </CustomText>
            </TouchableOpacity>

            {isShownPicker ? (
              <MultipleSelectPicker
                items={[
                  {label: 'itachi', value: '1'},
                  {label: 'kakashi', value: '2'},
                  {label: 'madara', value: '3'},
                  {label: 'menato', value: '4'},
                  {label: 'naruto', value: '5'},
                  {label: 'hinata', value: '6'},
                  {label: 'jiraya', value: '7'},
                  {label: 'tsunade', value: '8'},
                  {label: 'naruto', value: '9'},
                  {label: 'sasuke', value: '10'},
                  {label: 'hashirama', value: '11'},
                  {label: 'tobirama', value: '12'},
                  {label: 'pain', value: '13'},
                  {label: 'sarada', value: '14'},
                  {label: 'sakura', value: '15'},
                  {label: 'asura', value: '16'},
                  {label: 'indra', value: '17'},
                ]}
                onSelectionsChange={ele => {
                  setSelectedItems(ele);
                }}
                selectedItems={selectedItems}
                buttonStyle={{
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                buttonText="hello"
                checkboxStyle={{height: 20, width: 20}}
              />
            ) : null}

            {(selectedItems || []).map((item: any, index) => {
              return (
                <CustomText
                  typography="Lato-Regular"
                  key={index}
                  style={{
                    fontSize: 20,
                    color: colors.white,
                    textAlign: 'center',
                    marginTop: 30,
                  }}>
                  {item.label}
                </CustomText>
              );
            })}
          </>
        )}
      </View>
    );
  } else {
    return (
      <ScrollView style={{backgroundColor: colors.white}}>
        <View
          style={
            state === 'initial'
              ? containerStyles.initialRoot
              : containerStyles.afterRoot
          }>
          <View style={containerStyles.containerTopBar}>
            {actualDate !== undefined ? (
              <>
                <TouchableOpacity style={{flex: 0.33}} onPress={callbackStop}>
                  <CustomText
                    style={{
                      ...topBarStyles.textAfterLogo,
                      flex: undefined,
                      fontSize: 20,
                      textAlign: 'center',
                      marginRight: 0,
                      color: colors.white,
                    }}
                    typography="Lato-Regular">
                    Deshacer
                  </CustomText>
                </TouchableOpacity>
                <View
                  style={{
                    ...topBarStyles.divider,
                    marginLeft: 0,
                    marginRight: 0,
                  }}
                />
                <TouchableOpacity style={{flex: 0.33}} onPress={callbackStop}>
                  <CustomText
                    style={{
                      ...topBarStyles.textAfterLogo,
                      flex: undefined,
                      fontSize: 20,
                      textAlign: 'center',
                      marginRight: 0,
                      color: colors.white,
                    }}
                    typography="Lato-Regular">
                    Finalizar
                  </CustomText>
                </TouchableOpacity>
                <View
                  style={{
                    ...topBarStyles.divider,
                    marginLeft: 0,
                    marginRight: 0,
                  }}
                />
                <CustomText
                  style={{
                    ...topBarStyles.textAfterLogo,
                    fontSize: 20,
                    textAlign: 'center',
                    flex: 0.33,
                    marginRight: 0,
                  }}
                  typography="Lato-Regular">
                  {getConvertedTimer(actualDate)}
                </CustomText>
              </>
            ) : (
              <CustomText
                style={{
                  ...topBarStyles.textAfterLogo,
                  textAlign: 'center',
                  flex: 1,
                  fontSize: 20,
                }}
                typography="Lato-Regular">
                Temporizador
              </CustomText>
            )}
          </View>

          {actualDate === undefined ? (
            <>
              <View style={containerStyles.timerContainer}>
                <CustomText
                  style={textStyles.timerText}
                  typography="Lato-Italic">
                  {actualDate !== undefined
                    ? getConvertedTimer(actualDate)
                    : '00:00:00'}
                </CustomText>
              </View>

              <View
                style={{
                  backgroundColor:
                    state === 'initial' ? colors.red : colors.secondary,
                  flex: 0.05,
                }}
              />
              <View style={containerStyles.buttonContainer}>
                <ButtonTimer
                  action={callbackStop}
                  title={state === 'initial' ? 'COMENZAR' : 'DETENER'}
                />
              </View>
            </>
          ) : (
            <View style={{flex: 1}}>
              {checkList ? (
                <ProgressSteps
                  activeStepIconBorderColor={colors.red}
                  progressBarColor={colors.greyText}
                  completedProgressBarColor={colors.red}
                  completedStepIconColor={colors.red}
                  disabledStepIconColor={colors.greyText}
                  activeLabelColor={colors.red}
                  activeStepNumColor={colors.red}>
                  <ProgressStep
                    label="Antes"
                    nextBtnTextStyle={{color: colors.black}}
                    nextBtnText="Siguiente">
                    <View style={{alignItems: 'center'}}>
                      {Object.entries(checkList.Antes).map(([key2, lista]) => (
                        <>
                          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                            {key2}
                          </Text>
                          <View style={{width: '75%'}}>
                            {lista.map(item => (
                              <BouncyCheckbox
                                size={25}
                                fillColor="red"
                                unfillColor="#FFFFFF"
                                iconStyle={{borderColor: 'red'}}
                                textStyle={{
                                  fontFamily: 'JosefinSans-Regular',
                                }}
                                isChecked={verifyCheckListDone(
                                  'Antes',
                                  key2,
                                  item,
                                )}
                                disableBuiltInState
                                text={item}
                                onPress={() => {
                                  if (
                                    verifyCheckListDone('Antes', key2, item)
                                  ) {
                                    removeCheckListDone('Antes', key2, item);
                                  } else {
                                    addCheckListDone('Antes', key2, item);
                                  }
                                  console.log(
                                    JSON.stringify(checkListDone, 0, 2),
                                  );
                                }}
                                style={{marginBottom: 8}}
                              />
                            ))}
                          </View>
                        </>
                      ))}
                    </View>
                  </ProgressStep>
                  <ProgressStep
                    label="Durante"
                    previousBtnTextStyle={{color: colors.black}}
                    nextBtnTextStyle={{color: colors.black}}
                    nextBtnText="Siguiente"
                    previousBtnText="Atras">
                    <View style={{alignItems: 'center'}}>
                      {Object.entries(checkList.Durante).map(
                        ([key2, lista]) => (
                          <>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                              {key2}
                            </Text>
                            <View style={{width: '75%'}}>
                              {lista.map(item => (
                                <BouncyCheckbox
                                  size={25}
                                  fillColor="red"
                                  unfillColor="#FFFFFF"
                                  iconStyle={{borderColor: 'red'}}
                                  textStyle={{
                                    fontFamily: 'JosefinSans-Regular',
                                  }}
                                  isChecked={verifyCheckListDone(
                                    'Durante',
                                    key2,
                                    item,
                                  )}
                                  disableBuiltInState
                                  text={item}
                                  onPress={() => {
                                    if (
                                      verifyCheckListDone('Durante', key2, item)
                                    ) {
                                      removeCheckListDone(
                                        'Durante',
                                        key2,
                                        item,
                                      );
                                    } else {
                                      addCheckListDone('Durante', key2, item);
                                    }
                                    console.log(
                                      JSON.stringify(checkListDone, 0, 2),
                                    );
                                  }}
                                  style={{marginBottom: 8}}
                                />
                              ))}
                            </View>
                          </>
                        ),
                      )}
                    </View>
                  </ProgressStep>
                  <ProgressStep
                    label="Después"
                    previousBtnTextStyle={{color: colors.black}}
                    finishBtnTextStyle={{color: colors.black}}
                    nextBtnTextStyle={{color: colors.red}}
                    previousBtnText="Atras"
                    finishBtnText="Terminar">
                    <View style={{alignItems: 'center'}}>
                      {Object.entries(checkList.Despues).map(
                        ([key2, lista]) => (
                          <>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                              {key2}
                            </Text>
                            <View style={{width: '75%'}}>
                              {lista.map(item => (
                                <BouncyCheckbox
                                  size={25}
                                  fillColor="red"
                                  unfillColor="#FFFFFF"
                                  iconStyle={{borderColor: 'red'}}
                                  textStyle={{
                                    fontFamily: 'JosefinSans-Regular',
                                  }}
                                  isChecked={verifyCheckListDone(
                                    'Despues',
                                    key2,
                                    item,
                                  )}
                                  disableBuiltInState
                                  text={item}
                                  onPress={() => {
                                    if (
                                      verifyCheckListDone('Despues', key2, item)
                                    ) {
                                      removeCheckListDone(
                                        'Despues',
                                        key2,
                                        item,
                                      );
                                    } else {
                                      addCheckListDone('Despues', key2, item);
                                    }
                                    console.log(
                                      JSON.stringify(checkListDone, 0, 2),
                                    );
                                  }}
                                  style={{marginBottom: 8}}
                                />
                              ))}
                            </View>
                          </>
                        ),
                      )}
                    </View>
                  </ProgressStep>
                </ProgressSteps>
              ) : (
                <Text>Cargando...</Text>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
};

export default TimerPage;
